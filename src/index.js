import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const API_KEY = "AIzaSyB_ZhZ8jZ5P55hcDITtsXJioF871M8CWtQ";

// Create a component that generate some html code
class App extends Component {
    render () {
        return (
            <h1>
                Bogdan Bugariu Frontend Test
            </h1>
        );
    }
}

// Show that generated html code to the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));