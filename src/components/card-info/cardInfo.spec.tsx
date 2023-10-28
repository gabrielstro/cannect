import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CardInfo from './cardInfo'
import { faReceipt } from "@fortawesome/free-solid-svg-icons";


describe('CardInfo', () => {
  it('renders the card info component', () => {
    render(<CardInfo title="Receita Médica" text="O primeiro passo" icon={faReceipt} />)
    expect(screen.getByText('Receita Médica')).toBeInTheDocument()
    expect(screen.getByText('O primeiro passo')).toBeInTheDocument()
  })
})