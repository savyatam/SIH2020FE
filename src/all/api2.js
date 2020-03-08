import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import API from '../utils/API';

class api2 extends React.Component
{
  state = {
      origin: '',
      originname:'',
      destination: '',
      destinationame:'',
      result: null,
      initialdata:[],
      data:[],
      visible:false
  }
    submitData = async (e) =>
    {
        e.preventDefault();
        this.setState({visible: !this.state.visible})
        const origin = this.state.origin.toUpperCase();
        const originname=await API.get(`station-decoder/${origin}`);
        this.setState({originname:originname.data.stationNamefromCode});
        const destination = this.state.destination.toUpperCase();
        const destinationame=await API.get(`station-decoder/${origin}`);
        this.setState({destinationame:destinationame.data.stationNamefromCode});
        try{
        const result = await API.get(`single-break-trains/${origin}/${destination}`);
        this.setState({initialdata: result.data})
        const arr=result.data;
        arr.forEach(async(item, i) => {
          const res=await API.get(`station-decoder/${item.connection}`);
          item.conn=res.data.stationNamefromCode;
          var joined = this.state.data.concat(item);
          this.setState({data:joined})
          //console.log(item.conSta);
        });
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
      var postList=(<div>type correct station code</div>);
      console.log(this.state.initialdata.length);
      if(this.state.initialdata.length&&(this.state.data.length==this.state.initialdata.length))
      {console.log(this.state.data);
        const posts  = this.state.data
        postList = posts.length ? (
          posts.sort((a, b) => (a.distance > b.distance) ? 1 : -1),
          posts.map(post => {
            var x=post["origin-connection"];
            var p='';
            x.map(temp=>{p+=(temp+' ');});
            var originToConnection=(<div>{p}</div>);
            x=post["connection-destination"];p='';
            x.map(temp=>{p+=(temp+' ');});
            var connectionToDestination=(<div>{p}</div>);
            return (
                  <div>
                  <p>Connecting station:{post.conn}(code:{post.connection});distance:{post.distance};
                  trains from {this.state.originname} to {post.conn}:{originToConnection}
                  trains from {post.conn} to {this.state.destinationame}:{connectionToDestination}
                  </p>
                  </div>
            )
          })
        ) : (
          <div className="center">No Trains to show</div>
        );
      }
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
        <Button type='submit' onClick = {(e)=>{this.submitData(e)}}>Find Route</Button>
        </Form>
    {this.state.visible&&<p>{postList}</p>}
    </React.Fragment>);
    }

}

export default api2;
