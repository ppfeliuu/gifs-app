import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Test in <GifExpertApp />", () => {
  test("should  show component", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should list of categories", () => {
    const categories = ["Pep", "Pop"];
  });
});
