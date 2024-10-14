import { describe, expect, test } from 'vitest'
import { fireEvent, getByText, render, screen } from '@testing-library/react'

import Home from './Home'

describe('Home Test', () => {
  test('render app page', async () => {
    render(<Home />)

    expect(
      screen.getByText('Click on the Vite and React logos to learn more')
    ).toBeDefined()
  })
  test('click in btn count', async () => {
    fireEvent.click(screen.getByText('count'))
    expect(screen.getByText('1'))
  })
})
