import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { useSession, signOut } from 'next-auth/react'

import Page from '../src/components/Page'
import WelcomeCard from '../src/cards/WelcomeCard'
import WithSession from '../src/components/WithSession'
import RootNav from '../src/components/RootNav'
import IndexPage from '../pages/index'

jest.mock('next-auth/react', () => ({
  __esModule: true,
  useSession: jest.fn(),
  signOut: jest.fn(),
}))
// Set default useSession behavior for unauthenticated state
const mockUseSession = useSession as jest.Mock
mockUseSession.mockReturnValue({ data: null, status: 'unauthenticated' })

describe('Page component', () => {
  test('renders children', () => {
    render(<Page title="Test Title"><div>Child Content</div></Page>)
    expect(screen.getByText('Child Content')).toBeInTheDocument()
  })
})

describe('WelcomeCard component', () => {
  test('renders card title and features list', () => {
    render(<WelcomeCard />)
    expect(screen.getByText('Welcome to Nextstrap')).toBeInTheDocument()
    expect(
      screen.getByText('A Next.js template with Bootstrap and authentication.')
    ).toBeInTheDocument()
    expect(screen.getByText(/Next.js 13\+ with React 18\+/)).toBeInTheDocument()
    expect(screen.getByText(/Bootstrap 5 styling/)).toBeInTheDocument()
    expect(screen.getByText(/Built-in authentication/)).toBeInTheDocument()
    expect(screen.getByText(/TypeScript support/)).toBeInTheDocument()
  })
})

describe('WithSession component', () => {
  test('renders authenticated content when session exists', () => {
    ;(useSession as jest.Mock).mockReturnValue({
      data: { user: { name: 'Alice' } },
      status: 'authenticated',
    })
    render(
      <WithSession
        authenticated={() => <div>Auth Content</div>}
        unauthenticated={<div>Unauth Content</div>}
      />
    )
    expect(screen.getByText('Auth Content')).toBeInTheDocument()
  })

  test('renders unauthenticated content when no session', () => {
    ;(useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'unauthenticated',
    })
    render(
      <WithSession
        authenticated={() => <div>Auth Content</div>}
        unauthenticated={<div>Unauth Content</div>}
      />
    )
    expect(screen.getByText('Unauth Content')).toBeInTheDocument()
  })
})

describe('RootNav component (logout)', () => {
  test('clicking logout calls signOut', () => {
    ;(useSession as jest.Mock).mockReturnValue({
      data: { user: { name: 'Bob' } },
      status: 'authenticated',
    })
    ;(signOut as jest.Mock).mockClear()
    render(<RootNav><div>Content</div></RootNav>)
    const btn = screen.getByRole('button', { name: /bob/i })
    fireEvent.click(btn)
    expect(signOut).toHaveBeenCalled()
  })
})

describe('Index page', () => {
  test('renders WelcomeCard content', () => {
    render(<IndexPage />)
    expect(screen.getByText('Welcome to Nextstrap')).toBeInTheDocument()
  })
})