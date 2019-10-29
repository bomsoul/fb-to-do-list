import React from 'react';
import firebase from '../Firebase';
import {Link} from 'react-router-dom';

const database = firebase.firestore();

export default class Show extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.id,
            title: "",
            description: "",
            status: false,
            duedate: ""
        }
    }

    componentDidMount(){
        database.collection("todos").doc(this.state.id).get().then((doc) => {
            console.log(doc.data().title)
            this.setState({
                title : doc.data().title,
                description: doc.data().description,
                status : doc.data().status,
                duedate: doc.data().duedate
            })
        })
    }

    render(){
        return(
            <div>
                <div className="ui message">
                    <div className="header">{this.state.title}</div>
                    <p>{this.state.description}
                    <br/>
                    Due date : {this.state.duedate}
                    </p>
                    <div className="ui fitted slider checkbox">
                        <input type="checkbox" 
                            checked={this.state.status} 
                        />
                        <label></label>
                    </div>
                    <label>{this.state.status ? 'DONE': 'Not Done'}</label>
                    <br/>
                    <button className="ui yellow button"><a><Link to={"/edit/"+this.state.id}>Edit</Link></a></button>
                </div>
            </div>
        )
    }
}