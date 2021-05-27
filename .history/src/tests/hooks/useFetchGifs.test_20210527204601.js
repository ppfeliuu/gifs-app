import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Test cuystom hooks", () => {
  test("should return initial state", () => {
    const { result } = renderHook(() => useFetchGifs("Pep"));
    const { data, loading } = result.current;
    //const { data, loading } = useFetchGifs("Pep");

    console.log(data, loading);

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
