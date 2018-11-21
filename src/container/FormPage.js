import React,{Component} from 'react';
import Form from '../component/Form';
class FormPage extends Component{

  constructor(props){
      super(props);
      this.state={
          firstname:'',
          lastname:'',
          dob:'',
          bloodgroup:''
      }
  }

  handleRegister(){
   this.props.history.push('/admitcardgeneration');
  }

 
 
  render(){
   
    return(
        <div>
          <Form FirstName={this.state.FirstName} LastName={this.state.LastName} dob={this.state.dob} BloodGroup={this.state.BloodGroup}  handleLogin={() => this.handleRegister()}/>  
        </div>
    );

  }

}
export default FormPage;