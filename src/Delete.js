import React from 'react';
import Axios from 'axios';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      age: 0,
      newName: [],
      toDashboard: false,
    };

    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeID(event) {
    this.setState({
      id: event.target.value,
    });
    console.log(this.state.id);
  }
  handleSubmit(event) {
    event.preventDefault();
    Axios.delete(`http://127.0.0.1:5000/users/remove/${this.state.id}`).then((res) => {
      console.log(res.data);
      console.log('deleted');
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
          <input type='submit' value='Delete' onSubmit={false} onChange={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
