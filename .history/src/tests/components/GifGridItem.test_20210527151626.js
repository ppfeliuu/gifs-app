import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test of <GifGridItem />", () => {
  const title = "Un title";
  const url = "https://img.com";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a paragraph ", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("should  have an image", () => {
    const img = wrapper.find("img");
    // console.log(img.prop());
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("should have css class animated_fadeIn", () => {
    const div = wrapper.find("div");
    //console.log(div.prop())
    const className = DIV.prop("className");

    expect(className.includes("animated_fadeIn")).toBe(true);
  });
});
