import React, { Component } from 'react';

class Food extends Component {
  handleClick = () => {
    if (this.props.selectFood) {
      this.props.selectFood(this.props.id);
    }
  }

  render() {
    const src = `https://trackapi.nutritionix.com/v2/search/instant/${this.props.id}/item`;
    return (
      <img src={src} className="Food" onClick={this.handleClick} alt ="" />
    );
  }
}

export default Food;
