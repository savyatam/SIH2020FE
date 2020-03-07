import React, { Component } from 'react'
class Home extends Component {

  render(){
  return (
    <div>
      <div className="container">
        <h4 className="center">Home</h4>
        <li><a href="/api">Check Status</a></li>
         <li><a href='/api1'>Direct paths</a></li>
         <li><a href='/api2'>Indirect paths</a></li>
         <li><a href='/api3'>Code to Station Name</a></li>
      </div>
    </div>
  )}
}
export default Home;
