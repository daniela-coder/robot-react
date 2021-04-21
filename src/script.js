import React, { Component } from 'react';
import "./App.css";

class Script extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        robotStates: [],
        currentRow: 0,
        currentColumn: 0
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      fetch('http://localhost:8080/script', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: this.state.value,
      })
      }).then(res => res.json())
        .then((data) => {
          this.setState({robotStates: data.robotStates })
        })
      .catch(console.log)
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <h2>Script</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <br/>
          <input type="submit" value="Submit" />
        </form>
        <div>
        {this.state.robotStates.map((robotState) => (
            <div>
              <h3>Move robot to </h3>
              <h5 >{robotState.position.row}</h5>
              <h5 >{robotState.position.column}</h5>
              <h5 >{robotState.direction}</h5>
            </div>
        ))}
      </div>
        <div>
            
            <table>
              <caption>TODO: use to render the robot position</caption>
              <tbody>
              <tr id="row0">
                  <td id="cell0-0"></td>
                  <td id="cell0-1"></td>
                  <td id="cell0-2"></td>
                  <td id="cell0-3"></td>
                  <td id="cell0-4"></td>

              </tr>
              <tr id="row1">
                  <td id="cell1-0"></td>
                  <td id="cell1-1"></td>
                  <td id="cell1-2"></td>
                  <td id="cell1-3"></td>
                  <td id="cell1-4"></td>
              </tr>
              <tr id="row2">
                  <td id="cell2-0"></td>
                  <td id="cell2-1"></td>
                  <td id="cell2-2"></td>
                  <td id="cell2-3"></td>
                  <td id="cell2-4"></td>
              </tr>
              <tr  id="row2">
                  <td id="cell3-0"></td>
                  <td id="cell3-1"></td>
                  <td id="cell3-2"></td>
                  <td id="cell3-3"></td>
                  <td id="cell3-4"></td>
                  
              </tr>
              <tr id="row2">
                  <td id="cell4-0"></td>
                  <td id="cell4-1"></td>
                  <td id="cell4-2"></td>
                  <td id="cell4-3"></td>
                  <td id="cell4-4"></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  }

  export default Script;
