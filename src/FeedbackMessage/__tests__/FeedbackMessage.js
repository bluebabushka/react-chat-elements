import React, { Component } from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FeedbackMessage from '../FeedbackMessage'

describe('FeedbackMessage component', () => {
  it('should render without issues', () => {
    const component = shallow(<FeedbackMessage />)
    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })
})
