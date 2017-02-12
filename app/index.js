var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var Footer = require('./components/Footer');
var Header = require('./components/Header');

var Display = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Header/>
        <App/>
        <Footer/>
      </div>
    );
  }
});

ReactDOM.render(<Display />, document.getElementById('app'));
