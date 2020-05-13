import React from 'react';
import Axios from 'axios';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      id: '',
      newName: [],
      toDashboard: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleChangeID(event) {
    this.setState({
      id: event.target.value,
    });
    console.log(this.state.id);
  }
  handleChangeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      age: this.state.age,
    };

    console.log(data);
    Axios.put(`http://127.0.0.1:5000/users/update/${this.state.id}`, data).then((res) => {
      console.log(res);
    });
    this.setState({ toDashboard: true });
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <Navbar />
        <form className='formss' onSubmit={this.handleSubmit}>
          <label for='fname'>ID:</label>
          <br />
          <input type='text' id='id' name='id' onChange={this.handleChangeID} />
          <br />
          <label for='fname'>Name:</label>
          <br />
          <input type='text' id='fname' name='fname' onChange={this.handleChange} />
          <br />
          <label for='age'>Age:</label>
          <br />
          <input type='number' id='age' name='age' onChange={this.handleChangeAge} />
          <br />
          <br />
          <input type='submit' value='Submit' onSubmit={false} onClick={this.handleSubmit} />
        </form>
        {/* <h1>{this.state.newName}</h1> */}
      </div>
    );
  }
}
