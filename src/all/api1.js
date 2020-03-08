import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import API from '../utils/API';
import Api2 from './api22.js';
class api1 extends React.Component
{

  state = {
      origin: '',
      destination: '',
      result: null,
      data1:[],
      visible:false
  }
    submitData = async (e) =>
    {
        e.preventDefault();
        this.setState({visible: !this.state.visible})
        localStorage.setItem("origin",this.state.origin);
        localStorage.setItem("destination",this.state.destination);
        //console.log(localStorage.getItem("destination"));
        const origin = this.state.origin.toUpperCase();
        const destination = this.state.destination.toUpperCase();
        try{
        const result = await API.get(`direct-trains/${origin}/${destination}`);
        this.setState({data1: result.data.direct})
        //console.log(result.data);
        }
        catch(e)
        {
            console.log(e);
        }

    }

    changeInDestinationForm = (e) =>
    {
        e.preventDefault();
        this.setState({
            destination: e.target.value
        });
    }

    changeInOriginForm = (e)=>
    {
        e.preventDefault();
        this.setState({
            origin: e.target.value
        });

    }

    render()
    {
      //console.log(this.state.data);
      const posts  = this.state.data1
      const postList = posts.length ? (
        posts.map(post => {
          //console.log(this.state.data);
          return (
                <div>
                <p>Train Number:{post}</p>
                </div>
          )
        })
      ) : (
        <div className="center">No Trains to show</div>
      );
    return(
    <React.Fragment>
        <Form>
        <Form.Field>
            <label>ORIGIN</label>
            <input placeholder='Code of station' onChange={this.changeInOriginForm}/>
        </Form.Field>
        <Form.Field>
            <label>DESTINATION</label>
            <input placeholder='Code of station' onChange={this.changeInDestinationForm}/>
        </Form.Field>
        <Button type='submit' onClick = {(e)=>{this.submitData(e)}}>Direct Trains</Button>
        {this.state.visible&&<div id="hide">
        {postList}
        <div> <Api2 /> </div>
        </div>}
        </Form>
    </React.Fragment>
    );
    }
}

export default api1;
