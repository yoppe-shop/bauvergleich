import React, {Component} from "react";
import {render} from "react-dom";
import List from "./list/list.jsx";
import Form from "./form/form";

class App extends Component {

    render() {
        return <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
                <List/>
            </div>
            <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <Form />
            </div>
        </div>
    }
}

export default App;