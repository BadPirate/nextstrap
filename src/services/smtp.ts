import sgMail from '@sendgrid/mail'
import nodemailer from 'nodemailer'
import config from '../utils/config'

// Only run on server
if (typeof window !== 'undefined') {
  throw new Error('smtp.ts should only be imported on the server')
}

const isTest = config.NODE_ENV === 'test'

let sendMailImpl: (options: SendMailOptions) => Promise<void>

export type SendMailOptions = {
  to: string | string[]
  from: string
  subject: string
  text: string
  html?: string
  replyTo?: string
}

export type SmtpAction = { ctaText: string; link: string }

export type FormattedSmtpOptions = {
  to: string | string[]
  from?: string
  subject: string
  text: string
  title?: string
  actions?: SmtpAction[]
  centerActions?: boolean
}

if (isTest) {
  // Use MailHog SMTP in test env
  const transporter = nodemailer.createTransport({
    host: 'mailhog',
    port: 1025,
    secure: false,
  })
  sendMailImpl = async (options: SendMailOptions) => {
    const { to, from, subject, text, html, replyTo } = options
    if (!to || !from || !subject || (!text && !html)) {
      throw new Error('Missing required fields for sending mail')
    }
    await transporter.sendMail({
      to,
      from,
      subject,
      text,
      html,
      replyTo,
    })
  }
} else {
  const SENDGRID_API_KEY = config.SENDGRID_API_KEY
  if (!SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is not set in environment/config')
  }
  sgMail.setApiKey(SENDGRID_API_KEY)
  sendMailImpl = async (options: SendMailOptions) => {
    const { to, from, subject, text, html, replyTo } = options
    if (!to || !from || !subject || (!text && !html)) {
      throw new Error('Missing required fields for sending mail')
    }
    await sgMail.send({
      to,
      from,
      subject,
      text,
      html,
      replyTo,
    })
  }
}

export async function sendMail(options: SendMailOptions): Promise<void> {
  const from = options.from || config.SMTP_FROM
  await sendMailImpl({ ...options, from })
}

export async function formattedSmtp(options: FormattedSmtpOptions): Promise<void> {
  const { to, from, subject, text, title, actions, centerActions } = options
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
      <h2 style="color: #333;">${title ? title : subject}</h2>
      <p style="color: #222; font-size: 16px;">${text.replace(/\n/g, '<br/>')}</p>
      ${
        actions && actions.length > 0
          ? `<div style="margin-top: 24px; display: flex; gap: 16px;${centerActions ? ' justify-content: center;' : ''}">
          ${actions.map((a) => `<a href="${a.link}" style="background: #007bff; color: #fff; padding: 10px 18px; border-radius: 4px; text-decoration: none; font-weight: bold; margin: 0 4px;">${a.ctaText}</a>`).join('')}
        </div>`
          : ''
      }
    </div>
  `
  await sendMail({ to, from: from ?? config.SMTP_FROM, subject, text, html })
}
