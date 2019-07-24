import React from 'react'
import ReactDOM from 'react-dom'
import {render,cleanup,fireEvent} from '@testing-library/react'

import Square from './Square'


afterEach(cleanup)

describe('<Square/> component',()=>{

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Square/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})
