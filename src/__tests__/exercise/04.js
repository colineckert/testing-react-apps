// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  let submittedData
  const handleSubmit = data => (submittedData = data)
  const {getByLabelText, getByRole} = render(<Login onSubmit={handleSubmit} />)
  const username = 'password123'
  const password = 'CoolDude'

  await userEvent.type(getByLabelText(/username/i), username)
  await userEvent.type(getByLabelText(/password/i), password)
  await userEvent.click(getByRole('button', {name: /submit/i}))
  expect(submittedData).toEqual({username, password})
})

/*
eslint
  no-unused-vars: "off",
*/
