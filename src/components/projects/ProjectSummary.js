import React from 'react';
import bg from '../images/logo-yoshi.png'
import moment from 'moment'
const ProjectSummary = ({project}) => {
    return ( 
        <div className="card ghostwhite project-summary">
        <div className="card-content green-text text-darken-3">
            <img id="bg" alt='bg' src={bg}/> 
            <span className="card-title verdana">{project.title.toUpperCase()}</span>
            <p>{project.content}</p>
            <hr/>
            <p className="grey-text text-darken-3"> Posted by {project.authorFirstName}{project.authorLastName}</p>
            <p className="grey-text -text-lighten-3">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
    </div>
     );
}
 
export default ProjectSummary;