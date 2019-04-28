import React, { Component } from 'react';

class Dashboard extends Component {
  state = {
    fruits: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch('/api/fruits');
      const fruits = await response.json();
      this.setState({
        fruits: fruits.data,
      });
    } catch (e) {
      console.error(e);
    }
  }

  render () {
    const { fruits } = this.state;

    return (
      <>
        <div>
          <h1>Dashboard</h1>
          <ul>
            {
              fruits.map((fruit) => {
                return (
                  <li>{fruit.name}</li>
                );
              })
            }
          </ul>
        </div>
      </>
    );
  }
}

export default Dashboard;
