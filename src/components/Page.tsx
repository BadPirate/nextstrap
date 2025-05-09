import Head from 'next/head'
import { ReactNode } from 'react'
import RootNav from './RootNav'

const Page = ({ title, children }: { title: string; children: ReactNode }) => (
  <RootNav title={title}>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </RootNav>
)
export default Page
