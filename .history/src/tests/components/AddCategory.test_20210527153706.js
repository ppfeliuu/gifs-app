import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test component", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test("should view a component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change text box", () => {
    const input = wrapper.find("input");
  });
});
