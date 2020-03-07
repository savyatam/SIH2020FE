import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import API from './utils/API';

class api2 extends React.Component
{
  state = {
      origin: '',
      destination: '',
      result: null,
      data:[]
  }
    submitData = async (e) =>
    {
        e.preventDefault();
        const origin = this.state.origin.toUpperCase();
        const destination = this.state.destination.toUpperCase();
        try{
        const result = await API.get(`single-break-trains/${origin}/${destination}`);
        this.setState({data: result.data.direct})
        console.log(result);
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
      const posts  = this.state.data
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
            <label>Origin </label>
            <input placeholder='First Name' onChange={this.changeInOriginForm}/>
        </Form.Field>
        <Form.Field>
            <label>Destination  </label>
            <input placeholder='Last Name' onChange={this.changeInDestinationForm}/>
        </Form.Field>
        <Button type='submit' onClick = {(e)=>{this.submitData(e)}}>Submit</Button>
       {postList}
        </Form>

    </React.Fragment>

    );
    }
}

export default api2;
