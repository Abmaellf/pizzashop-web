import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should dispalay the right text when order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)
    // wrapper.debug()
    const statusText = wrapper.getByText('Pendente')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-yellow-400')
  })

  it('should dispalay the right text when order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)
    // wrapper.debug()
    const statusText = wrapper.getByText('Cancelado')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should dispalay the right text when order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)
    // wrapper.debug()
    const statusText = wrapper.getByText('Entregue')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })

  it('should dispalay the right text when order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)
    const statusText = wrapper.getByText('Entregando')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should dispalay the right text when order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)
    // wrapper.debug()
    const statusText = wrapper.getByText('Em preparo')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
})
