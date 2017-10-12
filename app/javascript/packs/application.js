import React from 'react'
import ReactDOM from 'react-dom'

import MediaIndex from '../react/containers/MediaIndex'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    ReactDOM.render(
      <MediaIndex />,
      reactElement
    )
  }
})
