import { getGifs } from "../../helpers/getGifs";

describe("Test getGifs Fetch", () => {
  test("should get 10 elements", async () => {
    const gifs = await getGifs("Pep");

    expect(gifs.length).toBe(11);
  });
});
