import React from 'react';
import { TextField } from 'react-md';
import { Card, CardTitle, CardText} from 'react-md';
import { Button } from 'react-md';

const style = { maxWidth: 320,marginTop:100 };
const Login = ({userName,password,handleLogin,handleSignup}) => {

     return(
       <div>
       <div class="header">
            <header>
               Cognizant
          </header>
         </div>
            <div >
        {<Card style={style} className="md-block-centered">
            <CardTitle title="Login"  />
            <CardText>
            <div className="md-grid md-cell-10">
            <TextField id="floating-center-title" label="User Name" lineDirection="center" placeholder="User Name"  />
             </div>
             <div className="md-grid md-cell-10">
             <TextField  id="floating-password"label="Enter your password" type="password" />
             </div>
             <div className="md-grid md-cell-10">
             <Button style={{display:'inline'}} onClick={() =>handleLogin()} flat primary swapTheming>Login</Button>   
             <br/>
             <div> <a style={{float:'right'}} href="registerform" onClick={() =>handleSignup()}>New User? Click here to register</a></div>
            
            </div>
            </CardText>
       </Card>}
            </div>
           
       <div class="footer">
   <footer> November 2018-2019  </footer>
       </div>
       </div>
     );

}
export default Login;

 
   