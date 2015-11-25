import React from 'react'
import View from './src/view.jsx'

var App = React.createClass({
  render: function() {
    return <View />
  }
});

React.render(<App />, document.querySelector('#content'))
