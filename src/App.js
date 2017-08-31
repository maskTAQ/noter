import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton} from 'material-ui';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <RaisedButton label="hello noter"/>
            </MuiThemeProvider>
        );
    }
}

export default App;
