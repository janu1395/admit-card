import React,{Component} from 'react';
import Login from '../component/Login';
class LoginPage extends Component{

  constructor(props){
      super(props);
      this.state={
          userName:'',
          password:''
      }
  }

  handleOnLogin(){
   this.props.history.push('/registerform');
  }
  handleOnSignup(){
   this.props.history.push('/signup');
  }

 
 
  render(){
   
    return(
        <div>
          <Login userName={this.state.userName} password={this.state.password} handleLogin={() => this.handleOnLogin()}/>  
             {/*<Login  handleSignup={() => this.handleOnSignup()}/>  */}
        </div>
    );

  }

}
export default LoginPage;