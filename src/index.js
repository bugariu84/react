import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Test from './components/test_component';

// Create a component that generate some html code
class App extends Component {
    render () {
        return (
            <div>
                <Test />
            </div>
        );
    }
}

// Show that generated html code to the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));