import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Header from './header'

describe('Text', () => {
  it('must render the header component', () => {
    render(<Header />)
    expect(screen.getByText('produtos')).toBeInTheDocument()
  })
  
  it('expands and collapses the mobile menu', () => {
    render(<Header />)
    const menuIcon = screen.getByTestId('menu-icon')
    fireEvent.click(menuIcon)
    const mobileMenu = screen.getByTestId('mobile-menu')
    expect(mobileMenu).toBeVisible()
    const menuCloseIcon = screen.getByTestId('menu-close-icon')
    fireEvent.click(menuCloseIcon)
    expect(mobileMenu).not.toBeVisible()
  })
})
