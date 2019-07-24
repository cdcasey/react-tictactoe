import React from 'react'
import ReactDOM from 'react-dom'
import {render,cleanup,fireEvent} from '@testing-library/react'

import Game from './Game'


afterEach(cleanup)

describe('<Game/> component',()=>{

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Game />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have clickable squares', () => {
    const {getByTestId, debug} = render(<Game/>)
    const square0 = getByTestId('square0')
    expect(square0.textContent).toBe('')
    fireEvent.click(square0)
    expect(square0.textContent).toBe('X')
  })

  xit('should have a sorting button',()=>{
    const mockSort = jest.fn();

    const {getByTestId, container, debug} = render(<Game />)

    const sortButton = getByTestId('sort-button')
    expect(sortButton).toBeTruthy()
    // fireEvent.click(sortButton)
    // fireEvent.click(sortButton)
    // const listItems = container.querySelectorAll('li');
    // console.warn(listItems.length);
    // // debug()
    // expect(mockSort).toHaveBeenCalledTimes(1)
  })

})
