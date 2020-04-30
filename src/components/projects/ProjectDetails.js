import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to="/signin"/>
    if (project) {
        return (
            <div className="container section project-details">
            <div className="card">
                <div className="card-content">
                <span className="card-title green-text text-darken-2">{project.title.toUpperCase()}</span>
                    <p >{project.content}</p>
                </div>
                <div className="card-action rounded green lighten-1 grey-text text-darken-4">
                    <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <div>{moment(project.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
        )}
    return ( 
       <p>Loading project...</p>
     );
}
 
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props =>[
        { collection: 'projects', doc: props.match.params.id }
    ])
)(ProjectDetails);