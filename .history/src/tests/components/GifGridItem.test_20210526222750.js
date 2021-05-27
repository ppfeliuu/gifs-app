import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test of <GifGridItem />", () => {
  test("Should show component", () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
