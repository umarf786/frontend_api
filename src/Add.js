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
      newName: [],
      toDashboard: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.yes();
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  yes() {
    Axios.get('http://127.0.0.1:5000/users').then((res) => {
      const persons = res.data.data;
      let i = -1;
      const data = persons.map((item) => {
        i = i + 1;
        return (
          <p>
            {item.name}, {item.age}, {item._id}
          </p>
        );
      });
      this.setState({ newName: data });
    });
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
    Axios.post('http://127.0.0.1:5000/users/add', data).then((res) => {
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
        <form className='formss'>
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
