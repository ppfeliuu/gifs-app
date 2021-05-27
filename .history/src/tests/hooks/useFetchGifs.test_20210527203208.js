import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Test cuystom hooks", () => {
  test("should return initial state", () => {
    const { data, loading } = useFetchGifs("Pep");

    console.log(data);
  });
});
