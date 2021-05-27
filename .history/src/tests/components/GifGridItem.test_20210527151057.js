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
});
