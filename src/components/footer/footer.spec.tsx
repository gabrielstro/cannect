import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from './footer'

describe('Footer', () => {
  it('renders the footer component', () => {
    render(<Footer />)
    expect(screen.getByText('Acesso rápido:')).toBeInTheDocument()
  })

  it('renders the footer links', () => {
    render(<Footer />)
    expect(screen.getByText('Sobre nós')).toBeInTheDocument()
    expect(screen.getByText('Cannabis Medicinal')).toBeInTheDocument()
    expect(screen.getByText('Produtos')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Profissionais da saúde')).toBeInTheDocument()
    expect(screen.getByText('Parceiros')).toBeInTheDocument()
    expect(screen.getByText('Políticas de privacidade')).toBeInTheDocument()
    expect(screen.getByText('Políticas de agendamento')).toBeInTheDocument()
  })

  it('renders the footer contact information', () => {
    render(<Footer />)
    expect(screen.getByText('faleconosco@cannect.com.br')).toBeInTheDocument()
  })

  it('renders the footer social media links', () => {
    render(<Footer />)
    expect(screen.getByAltText('Facebook')).toBeInTheDocument()
    expect(screen.getByAltText('Instagram')).toBeInTheDocument()
    expect(screen.getByAltText('Twitter')).toBeInTheDocument()
    expect(screen.getByAltText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByAltText('Youtube')).toBeInTheDocument()
  })
})