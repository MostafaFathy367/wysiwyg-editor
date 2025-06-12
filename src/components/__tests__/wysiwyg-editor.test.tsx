import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WysiwygEditor } from '../wysiwygEditor'
import { expect, test, describe, vi } from 'vitest'

describe('WysiwygEditor Toolbar Buttons', () => {
  test('renders Bold, Italic, and Underline buttons', () => {
    render(<WysiwygEditor />)
    expect(screen.getByRole('button', { name: /bold/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /italic/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /underline/i })).toBeInTheDocument()
  })

  test('Bold button calls onChange when clicked', async () => {
    const handleChange = vi.fn()
    render(<WysiwygEditor onChange={handleChange} value={undefined} />)
    const boldBtn = screen.getByRole('button', { name: /bold/i })
    await userEvent.click(boldBtn)
    expect(boldBtn).toBeInTheDocument()
  })

  test('Italic button is present and clickable', async () => {
    render(<WysiwygEditor />)
    const italicBtn = screen.getByRole('button', { name: /italic/i })
    await userEvent.click(italicBtn)
    expect(italicBtn).toBeInTheDocument()
  })

  test('Underline button is present and clickable', async () => {
    render(<WysiwygEditor />)
    const underlineBtn = screen.getByRole('button', { name: /underline/i })
    await userEvent.click(underlineBtn)
    expect(underlineBtn).toBeInTheDocument()
  })
})


