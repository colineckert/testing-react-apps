// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import Counter from '../../components/counter'

// NOTE: this is a new requirement in React 18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

test('counter increments and decrements when the buttons are clicked', () => {
  const container = document.createElement('div')
  document.body.append(container)

  act(() => {
    createRoot(container).render(<Counter />)
  })

  const [decrement, increment] = container.querySelectorAll('button')
  const message = container.firstChild.querySelector('div')
  expect(message.textContent).toBe('Current count: 0')

  act(() => {
    const incrementClick = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      button: 0,
    })
    increment.dispatchEvent(incrementClick)
  })
  expect(message.textContent).toBe('Current count: 1')

  act(() => {
    const decrementClick = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      button: 0,
    })
    decrement.dispatchEvent(decrementClick)
  })
  expect(message.textContent).toBe('Current count: 0')

  container.remove()
})

/* eslint no-unused-vars:0 */
