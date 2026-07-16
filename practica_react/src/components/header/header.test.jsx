import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './header'

test('muestra el menú principal', () => {

    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )

    expect(
        screen.getByText('Inicio')
    ).toBeInTheDocument()
})