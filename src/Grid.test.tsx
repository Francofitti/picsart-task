import "@vitest/browser/matchers.d.ts";
import { expect, test, vi, } from "vitest";
import { Grid } from "./Grid";
import { render } from 'vitest-browser-react'
import { VirtuosoGridMockContext } from "react-virtuoso";
import { MemoryRouter } from "react-router";

// Mock data for testing
const mockData = [
  {
    id: 0,
    src: { small: null },
  },
  {
    id: 1,
    src: { small: null },
  },
  {
    id: 2,
    src: { small: null },
  },
]

test('renders data correctly', async () => {
  const { getByRole} = render(<MemoryRouter><Grid data={mockData} onEndReached={ vi.fn()} /></MemoryRouter>, {
    wrapper: ({ children }) => (
      <VirtuosoGridMockContext.Provider value={{ viewportHeight: 300, viewportWidth: 300, itemHeight: 100, itemWidth: 100 }}>{children}</VirtuosoGridMockContext.Provider>
    ),});
  const images = getByRole("img")
  const links = getByRole("link")
  expect(images.elements()).toHaveLength(mockData.length)
  links.elements().forEach((it, index) => {
    expect(it.getAttribute("href")).toBe(`/photo/${index}`)
  })
});