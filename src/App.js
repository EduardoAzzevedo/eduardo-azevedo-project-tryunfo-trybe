import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <div>
          <Form />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
