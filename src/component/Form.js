import React from 'react';
import { TextField } from 'react-md';
import { Card, CardTitle, CardText} from 'react-md';
import { Button } from 'react-md';

const style = { maxWidth: 320,marginTop:100 };
const Form = ({generateCard}) => {

     return(
       <div>
       <div class="header">
            <header>
               Cognizant
          </header>
         </div>
            <div >
        {<Card style={style} className="md-block-centered">
            <CardTitle title="REGISTRATION FORM"  />
            <CardText>
            <div className="md-grid md-cell-10">
            <TextField id="floating-center-title" label="FIRST NAME" lineDirection="center" placeholder="FIRST NAME"  />
             </div>
               <div className="md-grid md-cell-10">
            <TextField id="floating-center-title" label="LAST NAME" lineDirection="center" placeholder="LAST NAME"  />
             </div>
              <div className="md-grid md-cell-10">
            <TextField id="floating-center-title" label="DATE OF BIRTH" lineDirection="center" placeholder="DATE OF BIRTH"  />
             </div>
              <div className="md-grid md-cell-10">
            <TextField id="floating-center-title" label="BLOOD GROUP" lineDirection="center" placeholder="BLOOD GROUP"  />
             </div>
             <div className="md-grid md-cell-10">
             <Button style={{display:'inline'}} onClick={() =>generateCard()} flat primary swapTheming>GENERATE CARD</Button>   
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
export default Form;

 
   