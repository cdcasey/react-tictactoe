import React from 'react'

import {render, fireEvent, screen} from '../test-utils'
import Game from './Game'

describe('the game app', ()=> {
    it('should render', ()=> {
        render(<Game/>)
        screen.debug()
    })
})