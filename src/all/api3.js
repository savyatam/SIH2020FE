import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import API from '../utils/API';

class api3 extends React.Component
{
  state = {
      code:'',
      result: null,
      data:'#',
      visible:false
  }
    submitData = async (e) =>
    {
        e.preventDefault();
        this.setState({visible: !this.state.visible})
        const code = this.state.code;
        try{
        const result = await API.get(`station-decoder/${code}`);
        this.setState({data: result.data});
        console.log(result);
        }
        catch(e)
        {
            console.log(e);
        }

    }

    changeInStationCode = (e) =>
    {
        e.preventDefault();
        this.setState({
            code: e.target.value
        });
    }
    render()
    {
      const posts=this.state.data
      var postList=(
        <div className="center">No Trains to show</div>
      );
      if(posts=='Invalid Details')
        {postList=(
          <div className="center">No Station exists</div>
        );}
        else
      {postList = posts!='#' ? (
                <div>
                <p>Station Name:{posts.stationNamefromCode}</p>
                </div>
      ) : (
        <div className="center">Type existing code</div>
      );}
    return(
    <React.Fragment>
        <Form>
        <Form.Field>
            <label>STATION CODE</label>
            <input placeholder='Code of station' onChange={this.changeInStationCode}/>
        </Form.Field>
        <Button type='submit' onClick = {(e)=>{this.submitData(e)}}>Find Station</Button>
        </Form>
     {this.state.visible&&<div>{postList}</div>}
    </React.Fragment>

    );
    }
}

export default api3;
