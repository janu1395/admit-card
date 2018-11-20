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
   this.props.history.push('/dashboard2');
  }

  handleRedirect(){
    alert("hello");
  }
 
  render(){
   
    return(
        <div>
          <Login userName={this.state.userName} password={this.state.password} handleLogin={() => this.handleOnLogin()}/>
            
        </div>
    );

  }

}
export default LoginPage;