import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Test cuystom hooks", () => {
  test("should return initial state", () => {
    const res = renderHook(() => useFetchGifs("Pep"));

    //const { data, loading } = useFetchGifs("Pep");

    console.log(data);
  });
});
