var React = require('react');
var marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: true
});

console.log(marked('I am using __markdown__.'));

var App = React.createClass({
			getInitialState: function () {
				return {userInput: '# Markdown language\n## is easy!\n### Headings take one to six hashes\n\n---\n\nUnordered list:\n* Two *ways* to make _italics_.\n* **Bold** is __similar__.\n*   Combine the two **_easily_**.\n\n***\n\nNumbered list:\n1. `Monospace`\n 1. An extra space precedes this sub-item.\n2. ~~Strikethrough~~\n * This one, too!\n---\n\n>Blockquotes\n\n___\n\n[Find out more here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet \"Optional Title\")\n=='}
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
					<div className='row panels'>
						<div className='col-xs-6 left-panel'>
							<textarea className='form-control' rows='30' type='text' value={this.state.userInput} onChange={this.handleUserInput}/>
						</div>
						<div className='col-xs-6 right-panel'><div dangerouslySetInnerHTML={{__html: marked(this.state.userInput)}}/></div>
					</div>
			);
		}
});

module.exports = App;
