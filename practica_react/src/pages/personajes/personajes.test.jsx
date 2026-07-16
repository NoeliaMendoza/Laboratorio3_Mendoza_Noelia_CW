import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { PersonajesPages } from './personajes'

global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                results: [
                    {
                        id: 1,
                        name: 'Rick Sanchez',
                        species: 'Human',
                        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
                    }
                ]
            })
    })
)

test('carga y muestra personajes desde la API', async () => {
    render(<PersonajesPages />)
    expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument()
})