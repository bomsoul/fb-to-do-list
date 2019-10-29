import React from 'react';
import firebase from '../Firebase';
import {Link} from 'react-router-dom';

const database = firebase.firestore();

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            id : [],
            todos: []
        }

    }

    componentDidMount(){
        database.collection("todos").get().then((querySnapshot) => {
            querySnapshot.forEach((doc)=> {
                this.setState({
                    id: [...this.state.id , doc.id],
                    todos: [...this.state.todos,doc.data()]
                })
            });
        })
    }

    render(){
        return(
            <div>
                <table className="ui celled definition compact table">
                    <thead>
                        <tr>
                            <th>status</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Modified</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map((key,index)=>
                            <tr className="">
                                <td className="collapsing">
                                <div className="ui fitted slider checkbox">
                                    <input type="checkbox" 
                                            checked={key.status} 
                                    />
                                    <label></label>
                                </div>
                                </td>
                                <td className={key.status === true ? 'completed': ''}>{key.title}</td>
                                <td className={key.status === true ? 'completed': ''}>{key.description}</td>
                                <td className={key.status === true ? 'completed': ''}>{key.duedate}</td>
                                <td>
                                <div class="ui buttons">
                                        <button className="ui positive black button">
                                            <a><Link to={"/show/" + this.state.id[index]}>Show</Link></a>
                                        </button>
                                        <div class="or" data-text="or"></div>
                                        <button className="ui negative button">Delete</button>
                                    </div>  
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                
            </div>
        )
    }
}
export default Home;