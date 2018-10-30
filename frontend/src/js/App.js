import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/navigation';
import pages from './pages/index';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import palette from './config/paletteConfig';

const theme = createMuiTheme({
  palette,
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <span className="app">
            <Navigation />
            <Route path="/login" component={pages.LoginPage} />
            <Route path="/register" component={pages.RegisterPage} />
            <Route path="/places" component={pages.PlacesListPage} />
            <Route path="/place/:id/" component={pages.PlacesDetailPage} />
            <Route path="/create" component={pages.PlacesCreatePage} />
          </span>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
