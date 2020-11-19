import React from "react";
import { useHistory } from "react-router-dom";
const Login=()=>{
    const history=useHistory();
    const GotoHomepage=(e)=>{
      
          var uname=document.getElementById("uname").value;
          var psw=document.getElementById("psw").value;
          if(uname==="test" && psw==="test123")
          {
            history.push("/Home");
          }
          else
          {
            alert("username and password is wrong");
            e.preventDefault();
            document.getElementById("uname").value='';
            document.getElementById("psw").value='';


          }
         
       

    }
    return(
        <>
            <h2 className="center">Login Form</h2>

            <form  onSubmit={GotoHomepage} method="post">
           

            <div className="container2">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" id="uname" name="uname" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="psw" name="psw" required/>
                    
                <button type="submit">Login</button>
                
            </div>

            
            </form>

        </>
    );
}
export default Login;