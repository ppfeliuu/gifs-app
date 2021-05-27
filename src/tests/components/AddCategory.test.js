import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test component", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

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

  test("should call setCategories and clean text box", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "Pep" } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenLastCalledWith(expect.any(Function));

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
