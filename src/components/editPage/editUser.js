import React,{Component} from 'react'
import EditableContent from './editableContent';

export default class EditUser extends Component {
  constructor(props){
    super(props)
    this.state ={
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      title: this.props.user.title,
      email: this.props.user.email,
      phoneNumber: this.props.user.phoneNumber,
      facebook: this.props.user.facebook,
      instagram: this.props.user.instagram,
      linkedIn: this.props.user.linkedIn,
      editable: null,
    }
  }

  changeHandler= (name,value)  =>{
    this.setState({
      [name]:value
    })
  }



  
  render(){
    return (
    <div className="user">
          <h1>User Details</h1>
          <table className="no-header-table">
              <tbody>
            <tr>
              <td>First Name:</td>
              <td><EditableContent name="firstName" value={this.state.firstName} editable={true} changeHandler={(name,value)=> this.changeHandler(name,value)}/></td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td><EditableContent name="lastName" value={this.state.lastName} editable={true} changeHandler={(name,value)=> this.changeHandler(name,value)}/></td>
            </tr>
            <tr>
              <td>Title:</td>
              <td><EditableContent name="title" value={this.state.title} editable={true} changeHandler={(name,value)=> this.changeHandler(name,value)}/></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td><EditableContent name="email" value={this.state.email} editable={true} changeHandler={(name,value)=> this.changeHandler(name,value)}/></td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td></td>
            </tr>
            <tr>
              <td>Facebook:</td>
              <td></td>
            </tr>
            <tr>
              <td>Instagram:</td>
              <td></td>
            </tr>
            <tr>
              <td>Linked-In:</td>
              <td></td>
            </tr>
            </tbody>
          </table>
          <button onClick={()=> this.props.saveChanges(this.state)}>
            Save Changes
          </button>
        </div>
  )
}
}
