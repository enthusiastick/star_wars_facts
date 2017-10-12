import React, { Component } from 'react'

class MediaIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      media: []
    }
  }

  componentWillMount() {
    fetch('/api/v1/media.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => { return response.json() })
    .then(data => { this.setState({ media: data.media }) })
  }

  render() {
    let mediaItems = this.state.media.map(medium => {
      return(<li key={medium.name}>{medium.name} ({medium.year})</li>)
    })

    return(
      <ul>
        {mediaItems}
      </ul>
    )
  }
}

export default MediaIndex
