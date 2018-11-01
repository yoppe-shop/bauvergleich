import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'prop-types';

class App extends Component {
    static propTypes = {
        test: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {test} = this.props;
        return <div>Hallo, wie gehts euch? {test}</div>
    }
}

export default App;