import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Test GifGrid", () => {
  const category = "pep";

  test("should show component", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show item when load useFetchGifs", () => {
    const gifs = [
      {
        id: 1,
        title: "abababa",
        url: "https://localhost/cbcbcb",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: true,
    });

    const wrapper = shallow(<GifGrid {...category} />);

    expect(wrapper).toMatchSnapshot();
  });
});
