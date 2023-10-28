import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CardBlog from './cardBlog'


describe('CardBlog', () => {
  it('renders the card blog component', () => {
    render(<CardBlog title="Cannect Ciência" text="Cannect conta com um espaço" photoSrc='/blog1.jpg' />)
    expect(screen.getByText('Cannect Ciência')).toBeInTheDocument()
    expect(screen.getByText('Cannect conta com um espaço')).toBeInTheDocument()
  })
})