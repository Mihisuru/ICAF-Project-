import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

class ViewEventsPage extends Component{

    constructor(props) {
        super(props);
        this.state = {employee : []};
    }

    componentDidMount() {

        axios.get('http://localhost:5000/api/event/all')
            .then(response => {
             this.setState({employee : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
        return this.state.employee.map(function (object, i){
            return <TableRow obj = {object} key = {i}/>;
        });
    }
    render() {
        return(
            <div style = {{marginTop :"10%"}}>
             
                <h1 className="textleft"  style = {{marginTop :"1%"}}>Events</h1>
                <hr/>
                    <table className="table table-striped" style = {{marginTop :50}}>
                        <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Duration</th>
                            <th>Description</th>
                            <th>Links</th>
                            <th>Created Date</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.tabRow()}
                        </tbody>
                    </table>
                    
            </div>
        );
    }
}

export default ViewEventsPage;
