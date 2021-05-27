import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test component", () => {
  const setCategories = () => {};

  test("should view a component", () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
});
