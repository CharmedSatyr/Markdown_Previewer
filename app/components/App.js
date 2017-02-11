var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');

var MDPreviewer = React.createClass({
			getInitialState: function () {
				return {userInput: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'}
			},
			handleUserInput: function (e) {
				this.setState(
					{
						userInput: e.target.value
					}
				);
			},
			render: function() {
				var n = Math.floor(Math.random() * 10 + 1);
				return (
					<div class='container'>
						<Header/>
						<p>Write your test below, and something will happen...</p>
						<br/>
						<textarea rows='5' type='text' value={this.state.userInput} onChange={this.handleUserInput} className='form-control'/>
						<br/>
						<div class='test'>{this.state.userInput}</div>
						<Footer/>
					</div>);
				}
			});

module.exports = MDPreviewer;
