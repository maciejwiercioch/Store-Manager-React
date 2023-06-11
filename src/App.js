import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import PackageDataList from './components/PackageDataList';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { packageData: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/api/packages')
      .then(response => {
        console.log(response.data._embedded.packages);
        this.setState({ packageData: response.data._embedded.packages })
      }
      )
      .catch(error => {
        console.error(error);
      });
    console.log(this.state.packageData.data);

  }

  render() {
    return (
      <PackageDataList packageData={this.state.packageData} />
    )
  }
}

export default App;
