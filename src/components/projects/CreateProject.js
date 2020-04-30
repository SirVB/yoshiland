import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect} from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
      }
   handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })

   }
    
   handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
        this.setState({
            title: '', content: ''
        });
        this.props.history.push('/')
    }
   
    render() { 
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h4 className="grey-text text-darken-3">Create new project</h4><hr/>
                        <div className="input-field">
                            <label htmlFor="title">Project Title</label>
                            <input type="text" id="title" required value={this.state.title} onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="content">Project Content</label>
                            <textarea name="content" minLength='5' maxLength='50' required id="content" 
                            value={this.state.content} 
                            className="materialize-textarea"  
                            onChange={this.handleChange}>  
                            </textarea>
                        </div>
                        <div className="input-field">
                        <div className="row">
                                <button id="create" className="btn pink lighten-1">Create</button>
                                <button id="cancel" className="btn grey darken-1">Cancel</button>
                            </div>
                        </div>
                </form>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);