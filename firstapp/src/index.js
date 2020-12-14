// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';


const renderText = (number) => {
    return 'Click on me! ' + ( number *  Math.floor(Math.random() * 100));
}

// Create a React component
const App = () => {
    const buttonText =  { text: 'Click Me now'};
    const styles = { backgroundColor: 'green', color: 'white', display: 'block', border: 'none'};

    return (
        <div>
            <label htmlFor="name">Enter name:</label>
            <input id="name" type="text" placeholder="Enter name test" />
            <button style={styles}> {buttonText.text} </button>
        </div>
    );
};

const SecondComponent = () => {
    const buttonText =  { text: 'A second button'};
    const styles = { backgroundColor: 'purple', color: 'white', display: 'block', border: 'none'};

    return (
        <div>
            <label htmlFor="name">Enter password:</label>
            <input id="name" type="text" placeholder="password" />
            <button style={styles}> {buttonText.text} </button>
        </div>
    );
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.render(<SecondComponent />, document.querySelector('#second'));