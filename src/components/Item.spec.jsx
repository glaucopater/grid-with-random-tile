import React from "react";
import Item from "./Item";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders properly", () => {
  const wrapper = shallow(<Item />);
  expect(wrapper).toMatchSnapshot();
});
