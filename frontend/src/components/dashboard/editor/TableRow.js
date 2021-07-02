import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";
import { push as RouterPush } from 'react-router-redux';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        
        axios.get('http://localhost:5000/api/event/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
    }
    render() {

        let statusline;
        if (this.props.obj.status=='Approved') {
            statusline = <td style={{backgroundColor:"Green", color:"white", textAlign:"center"}}><b>{this.props.obj.status}</b></td>;
        } else if (this.props.obj.status=='Reject'){
            statusline = <td style={{backgroundColor:"red", color:"white", textAlign:"center"}}><b>Rejected</b></td>;
        } else if (this.props.obj.status=='Pending'){
            statusline = <td style={{backgroundColor:"orange", color:"white", textAlign:"center"}}><b>{this.props.obj.status}</b></td>;
        }
        return (
            <tr>
                <td>
                    {this.props.obj.ename}
                </td>
                <td>
                    {this.props.obj.edue}
                </td>
                <td>
                    {this.props.obj.edes}
                </td>
                <td>
                    {this.props.obj.link}
                </td>
                <td>
                    {this.props.obj.date}
                </td>

                {statusline}
                
                <td>
                    <Link to={"/editor/edit/event/"+this.props.obj._id} className="btn btn-primary">Update</Link>

                </td>
                <td>
                    <td><button onClick={this.delete} className="btn btn-danger">Delete</button></td>

                </td>
            </tr>
        );
    }
}

export default TableRow;