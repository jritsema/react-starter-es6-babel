import React from 'react'
import Button from 'react-bootstrap/lib/Button'

export default React.createClass({

  render: function() {
    return (
      <div className="page">
        <h3>React Bootstrap App</h3>
        <div className="row">
          <div className="col-md-3">
            <Button className="btn-default">
              Button
            </Button>
          </div>
          <div className="col-md-9">
          </div>
        </div>
      </div>
    );
  }

});
