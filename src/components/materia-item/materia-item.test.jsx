import { render, screen } from '@testing-library/react'
import { MateriaItem } from './materia-item'

test('muestra correctamente la asignatura', () => {

    render(
        <MateriaItem
            nombre="Programación Web"
            descripcion="Desarrollo Frontend"
        />
    )

    expect(
        screen.getByText('Programación Web')
    ).toBeInTheDocument()
})