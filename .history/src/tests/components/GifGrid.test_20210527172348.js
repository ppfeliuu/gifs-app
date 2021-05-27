import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";

describe("Test GifGrid", () => {
  const category = "pep";

  test("should show component", () => {
    const wrapper = shallow(<GifGrid {...category} />);
    expect(wrapper).toMatchSnapshot();
  });
});
