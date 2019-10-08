import React from 'react';
import firebase from '../Firebase';

const database = firebase.firestore();

class Create extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title: "",
            description: "",
            status: false
        }
    }

    onTitleChange = (e) =>{
        this.setState({
            title : e.target.value
        });
    }

    onDescriptionChange = (e) =>{
        this.setState({
            description : e.target.value
        });
    }

    onStatusChange = (e) =>{
        this.setState({
            status : !this.state.status
        })
        
    }

    onSubmitChange = (e) =>{
        e.preventDefault();
        database.collection("todos").doc().set({
            title: this.state.title,
            description: this.state.description,
            status : this.state.status
        });
        this.setState({
            title: "",
            description: "",
            status: false
        })
        alert("Add Todo success!!");

    }

    render(){
        return(
            <div>
                <form className="ui form" onSubmit={this.onSubmitChange}>
                    <div className="field">
                        <label>Title</label>
                        <div className="ui fluid input">
                            <input 
                                name="title"
                                value = {this.state.title}
                                type="text" 
                                placeholder="Title Name"
                                onChange={this.onTitleChange} 
                            />
                        </div>
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <textarea 
                            name="description"
                            value = {this.state.description}
                            placeholder="Add your List Description here ..." 
                            rows="3"
                            onChange={this.onDescriptionChange}
                        >
                        </textarea>
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input 
                                name="status"
                                checked={this.state.status === true} 
                                type="checkbox" 
                                tabindex="0" 
                                onChange={this.onStatusChange}
                            />
                            <label>Click to note finish</label>
                        </div>
                    </div>
                    <div class="field">
                        <button className="ui green inverted button">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Create;