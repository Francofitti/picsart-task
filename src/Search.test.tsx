import "@vitest/browser/matchers.d.ts"


import { expect, test, vi } from 'vitest'
import { render } from 'vitest-browser-react'

import Search from "./Search.tsx"

test('returns searched value', async () => {

  const mock = vi.fn()
  const { getByRole } = render(<Search onSearch={mock}/>)

  await getByRole('textbox').fill("people")
  await getByRole('button').click()
  await expect(mock).toHaveBeenCalledWith("people");
})