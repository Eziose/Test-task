import React from 'react';
import FormInput from './containers/Form/FormInput/FormInput';
import FormBlocks from './containers/Form/FormBlocks/FormBlocks';
import FormFinish from './containers/Form/FormFinish/FormFinish';
import { Switch, Route} from "react-router-dom";

import './App.css';

function App() {
    return (
        <div className="container">
            <div>
                <Switch>
                    <Route exact path="/" component={FormInput}></Route>
                    <Route path="/form-blocks" component={FormBlocks}></Route>
                    <Route path="/form-finish" component={FormFinish}></Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
