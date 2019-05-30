import React, { Component } from "react";
import Item from "./Item";
import { shallow } from "enzyme";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders properly", () => {
  const wrapper = shallow(<Hello name="CodeSandbox" />);
  expect(wrapper.text()).toEqual("Hello CodeSandbox!");
});

describe("convertBlock", () => {
  it("should render an item", () => {
    const renderedComponent = shallow(<Item />);
    expect(renderedComponent).toBe(true);
  });
});
