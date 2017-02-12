var React = require('react');
var marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

console.log(marked('I am using __markdown__.'));

var App = React.createClass({
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
				return (
					<div className='row'>
						<div className='col-xs-6'>
							<textarea className='form-control' rows='22' type='text' value={this.state.userInput} onChange={this.handleUserInput}/>
						</div>
						<div className='col-xs-6'>{marked(this.state.userInput)}></div>
					</div>
			);
		}
});

module.exports = App;
