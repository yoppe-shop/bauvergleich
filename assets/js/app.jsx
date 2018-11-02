import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

class App extends Component {
    static propTypes = {
        test: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            numClicked: 0
        };
    }

    handleClick = e => {
        e.preventDefault();
        const newNum = this.state.numClicked + 1;
        this.setState({
            isClicked: true,
            numClicked: newNum
        });
    };

    render() {
        const {test} = this.props;
        const {isClicked, numClicked} = this.state;

        return (
            <div>
                <div>Hallo, wie gehts euch? {test}</div>
                <a href="#" onClick={this.handleClick}>
                Click me
                </a>
                <div>
                { isClicked &&
                    <div>Es wurde {numClicked} mal geklickt!</div>
                }
                </div>
            </div>
        );

    }
}
export default App;