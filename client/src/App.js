import React, { Component } from 'react';
import AppNavbar from './components/appNavbar';
import ShoppingList from './components/shoopingList';
import {Provider} from 'react-redux';
import store from './store';
import ItemModal from './components/itemModal';
import {Container} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
         </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
