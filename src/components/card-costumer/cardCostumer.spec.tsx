import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CardCostumer from './cardCostumer'

describe('CardCostumer', () => {
  it('renders the card costumer component', () => {
    render(<CardCostumer title="Receita Médica" text="O primeiro passo" photoSrc={'/bruno.jpeg'} />)
    expect(screen.getByText('Receita Médica')).toBeInTheDocument()
    expect(screen.getByText('O primeiro passo')).toBeInTheDocument()
  })
})