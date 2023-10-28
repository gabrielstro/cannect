import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import CollapseText from './collapseText'

describe('CollapseText', () => {
  it('renders the title and icon', () => {
    render(<CollapseText title="O que é cannabis medicinal?" text="A cannabis possui mais de 120 canabinoides" />)
    expect(screen.getByText('O que é cannabis medicinal?')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('expands and collapses the text', () => {
    render(<CollapseText title="O que é cannabis medicinal?" text="A cannabis possui mais de 120 canabinoides" />)
    const icon = screen.getByTestId('icon')
    fireEvent.click(icon)
    const text = screen.getByText('A cannabis possui mais de 120 canabinoides')
    expect(text).toBeVisible()
    fireEvent.click(icon)
    expect(text).not.toBeVisible()
  })
})