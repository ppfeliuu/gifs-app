import { getGifs } from "../../helpers/getGifs";

describe("Test getGifs Fetch", () => {
  test("should get 10 elements", async () => {
    const gifs = await getGifs("Pep");

    expect(gifs.length).toBe(10);
  });

  test("should get empty array", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
