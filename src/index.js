import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtoolsPanel } from 'react-query/devtools'

import Game from './components/Game'
import './index.css'

const queryClient = new QueryClient()
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Game />
    <ReactQueryDevtoolsPanel />
  </QueryClientProvider>,
  document.getElementById('root'),
)
