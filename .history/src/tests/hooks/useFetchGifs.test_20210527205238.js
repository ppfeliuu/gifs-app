import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Test cuystom hooks", () => {
  test("should return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Pep"));
    const { data, loading } = result.current;
    //const { data, loading } = useFetchGifs("Pep");
    // console.log(data, loading);

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("should show 10 items and loading = false ", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Pep"));
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(true);
  });
});
