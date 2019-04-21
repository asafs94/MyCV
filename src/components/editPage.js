import React, { Component } from "react";
import "./editPageStyle.scss";
import EditUser from "./editPage/editUser";


export default class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
        user: this.props.user,
        skills: this.props.skills,
        education: this.props.education
    }
  }

  saveUserChanges = (state) => {
      this.setState({
          user: state
      })
      this.props.saveChanges("user", state);
    }

  render() {
    const user = this.props.user;
    const skills = this.props.skills;
    const education= this.props.education;

    const skillTableContent= skills.map(skill => <tr key={skill.name+skill.id}>
        <td>{skill.id}</td>
        <td>{skill.name}</td>
        <td>{skill.level}</td>
        <td>Edit</td>
    </tr>);



    return (
      <div id="edit-page">
        <EditUser user={user} saveChanges={this.saveUserChanges}/>
        <h1>Skills</h1>
        <table>
            <tbody>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Level</th>
            </tr>

            {skillTableContent}
            </tbody>
        </table>
        <h1>Education</h1>
        <table className="no-header-table">
            <tbody>
                <tr>
                    <td>Name:</td>
                    <td>{education.name}</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>City:</td>
                    <td>{education.city}</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Country:</td>
                    <td>{education.country}</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Year Began:</td>
                    <td>{education.startYear}</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Year Finished:</td>
                    <td>{education.endYear}</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Summary:</td>
                    <td>{education.summary}</td>
                    <td>Edit</td>
                </tr>
            </tbody>
        </table>
        <h1>Courses</h1>
        <h1>Projects</h1>
      </div>
    );
  }
}
