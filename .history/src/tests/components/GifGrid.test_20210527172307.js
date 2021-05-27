import { shallow } from "enzyme";
import React from "react";
import { GifGrid } from "../../components/GifGrid";

describe("Test GifGrid", () => {
  const wrapper = shallow(<GifGrid />);

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
