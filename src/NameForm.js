import React, { Component } from 'react';




class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {henna: ''};

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({henna: event.target.value});
    console.log(event.target.value);
  }


  render() {
    return (
      <form >
        <label>
          <input type="text" henna={this.state.henna} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}
export default NameForm;
