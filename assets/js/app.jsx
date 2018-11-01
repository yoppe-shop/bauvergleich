import React from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {test} = this.props;
        return <div>Hallo, wie gehts euch? {test}</div>
    }
}

App.propTypes = {
    test: PropTypes.string.isRequired
}

export default App;