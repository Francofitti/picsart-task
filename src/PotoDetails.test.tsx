import "@vitest/browser/matchers.d.ts";
import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { MemoryRouter, useLocation } from "react-router";
import { PhotoDetails } from "./PhotoDetails";



// Mock `useLocation`
vi.mock("react-router", async () => {
  const mod = await vi.importActual('react-router');
  return {
    ...mod,
    useLocation: vi.fn()
}
});

test("renders photo detail", async () => {

    vi.mocked(useLocation).mockReturnValue({
        pathname: "/mock-path",
        search: "?query=mock",
        hash: "#mock-hash",
        state: { from: "/previous-path", title: "test", photographer: "Carl", src: { medium: null } },
        key: "mock-key",
      })

    const { getByTestId, getByText } = render(
        <MemoryRouter>
            <PhotoDetails />
        </MemoryRouter>
    );

    expect(getByTestId("title").element()).toBeInTheDocument()
    expect(getByText("Back to search").element()).toBeInTheDocument()
    expect(getByText("Photo by Carl").element()).toBeInTheDocument()
});

test("renders link back when no data is passed", async () => {

    vi.mocked(useLocation).mockReturnValue({
        pathname: "/mock-path",
        search: "?query=mock",
        hash: "#mock-hash",
        state: null,
        key: "mock-key",
      })

    const { getByText } = render(
        <MemoryRouter>
            <PhotoDetails />
        </MemoryRouter>
    );
    expect(getByText("Image not found please go back").first().element()).toBeInTheDocument();
});