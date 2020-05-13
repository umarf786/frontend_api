import React from 'react';
import Navbar from './Navbar';
import Axios from 'axios';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: false,
      newName: [],
    };
  }
  yes() {
    Axios.get('http://rest-api-umarf786.herokuapp.com/users').then((res) => {
      const persons = res.data.data;
      let i = -1;
      const data = persons.map((item) => {
        i = i + 1;
        return (
          <div>
            <p>
              Name: {item.name}, Age: {item.age}, ID: {item._id}
            </p>
          </div>
        );
      });
      this.setState({ newName: data });
    });
  }
  componentDidMount() {
    setTimeout(() => {
      this.yes();
      console.log('mounted!');
    }, 50);
    console.log('mounted!');

    this.setState({ mount: true });
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
          <div className='user'>
            <h2>{this.state.newName}</h2>
          </div>
        </div>
      </div>
    );
  }
}
