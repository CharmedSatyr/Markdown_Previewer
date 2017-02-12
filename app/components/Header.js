var React = require('react');

var Header = React.createClass(
  {
    render: function () {
      return (
        <div className='header row'>
          <div className='col-xs-12'>
            <h1>Markdown Previewer</h1>
          </div>
        </div>
      );
    }
  }
);

module.exports = Header;
