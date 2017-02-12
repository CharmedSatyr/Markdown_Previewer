var React = require('react');

var Header = React.createClass(
  {
    render: function () {
      return (
        <div className='header row'>
          <span className='col-xs-12'><img className='img' src='style/logo.gif'/> Markdown Previewer</span>
        </div>
      );
    }
  }
);

module.exports = Header;
