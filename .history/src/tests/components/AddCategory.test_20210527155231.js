import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test component", () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should view a component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change text box", () => {
    const input = wrapper.find("input");
    const value = "Pep";
    input.simulate("change", { target: { value } });
  });

  test("should not post info on submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });
});
