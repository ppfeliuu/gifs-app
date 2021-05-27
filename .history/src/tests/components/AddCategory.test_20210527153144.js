import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test component", () => {
  test("should view a component", () => {
    const wrapper = shallow(<AddCategory />);
  });
});
