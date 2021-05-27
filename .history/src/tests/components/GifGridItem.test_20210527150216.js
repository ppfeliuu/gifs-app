import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test of <GifGridItem />", () => {
  const title = "Un title";
  const url = "https://img.com";

  test("Should show component", () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
