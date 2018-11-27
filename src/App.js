import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
	  const word = "is good"
	  const className='header'
	  //const isGoodWord =true
	  
    return (
	    <div>
	    <div className="App">
	    <header className="App-header">
	    <h2>React is {(function(){return word})()}</h2>
	    <img src={logo} className="App-logo" alt="logo" />
	    <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
      </div>
      <div className={className}>
	    <h1>
	    react 
	    {this.renderGoodWord(
		    <strong> is good</strong>,
	            <span> is  not good </span>
	    )}
	    </h1>
      </div>
      <div>
	<Title />	    
      </div>
    </div>
    );
  }

renderGoodWord(goodWord,badWord) {
	const isGoodWord = false
	return isGoodWord ? goodWord : badWord
}

}
class Title extends Component{
	render (){
		return (
			<h1> React I am learning </h1>
		)
	}
}

//rendergoodWord(goodWord,badWord) {
//	const isGoodWord = false
//	return isGoodWord ? goodWord : badWord
//}

export default App;
