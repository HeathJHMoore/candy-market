import React, { Component } from 'react';
import values from '../APIRequests/values';
import eatCandy from '../APIRequests/eatCandy';
import './Home.scss';

class Home extends Component {

  state = {
    displayValues : []
  }

  getValues = () => {
    // make API call
    values.getValues()
      .then((resp) => {
        let myNewValues = [...resp];
        this.setState({displayValues : myNewValues});
      })
      .catch((error) => console.log(error))
  }

  eatCandy = (e) => {
    eatCandy.eatCandy(e.target.id)
      .then(() => {
        this.getValues()
      })
      .catch()
  }

  showAllValues = () => {
    const myValues = [...this.state.displayValues];
    return myValues.map((item) => {
      return <div className="candy-card" key={item.id}>
              <h2>{item.name}</h2>
              <h4>{item.manufacturer}</h4>
              <h4>{item.flavor}</h4>
              <h4>{item.recievedDate}</h4>
              <button id={item.id} onClick={this.eatCandy}>Eat this Candy</button>
             </div>
    })
  }

  render () {
    const testText = this.props.testText;
    return (
      <div className="Home">
          <button onClick={this.getValues}>Click me please!</button>
          <div className="candy-container">
          {this.showAllValues()}
          </div>
      </div>
    );
  }
}

export default Home;