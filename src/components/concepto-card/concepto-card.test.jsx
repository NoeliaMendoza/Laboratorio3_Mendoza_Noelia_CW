import { render, screen } from '@testing-library/react'
import { ConceptoCard } from './concepto-card'

test('muestra correctamente el título recibido', () => {

    render(
        <ConceptoCard
            titulo="React"
            descripcion="Biblioteca para interfaces"
            imagen="react.png"
        />
    )

    expect(
        screen.getByText('React')
    ).toBeInTheDocument()
})
