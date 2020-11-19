import { useState } from "react";
import React from 'react';
import { useHistory } from "react-router-dom";

const Register=()=>{
    const history=useHistory();
    const[fetchAll,setEverything]=useState({
        Fullname:"",
        Email:"",
        Username:"",
        Password:""

    });
    
    const passData=(e)=>{
        // alert(e.target.value);
        
        e.preventDefault();
        setEverything(fetchAll);
       alert(fetchAll.Fullname+" your registration is completed");
       history.push("/Login");
       

    }
    const inputEvent=(e)=>{
        // alert(e.target.value);
        // setName(e.target.value);
        console.log(e.target.value);
        console.log(e.target.name);

        const value=e.target.value;
        const name=e.target.name;

        setEverything((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            }
            // if(name==="Fullname")
            // {
            //     return{
            //         Fullname:value,
            //         Email:preValue.Email,
            //         Username:preValue.Username,
            //         Password:preValue.Password,
            //     }
            // }else if(name==="Email")
            // {
            //     return{
            //         Fullname:preValue.Fullname,
            //         Email:value,
            //         Username:preValue.Username,
            //         Password:preValue.Password,
            //     }
            // }else
            // if(name==="Username")
            // {
            //     return{
            //         Fullname:preValue.Fullname,
            //         Email:preValue.Email,
            //         Username:value,
            //         Password:preValue.Password,
            //     }
            // }if(name==="Password")
            // {
            //     return{
            //         Fullname:preValue.Email,
            //         Email:preValue.Email,
            //         Username:preValue.Username,
            //         Password:value,
            //     }
            // }
        })
    }
    return(
        <>
        <h2 className="center">Registration Page</h2>
        <div className="split left">
            <div className="centered">
                <h1>Welcome Everyone </h1>
                {/* <p className="Result">Fullname:{fetchAll.Fullname} <br/>Email:{fetchAll.Email} <br/>Username:{fetchAll.Username}<br/>Password:{fetchAll.Password} <br/></p> */}
                <p>Register here for login to our website</p>
            </div>
        </div>
        <div className="split right">
            <div className="centered container">
                <form onSubmit={passData}  method="POST">
                    <div className="row">
                        <div className="col-25">
                            <label><b>FullName:</b></label>   
                        </div>
                        <div className="col-75">
                            <input type="text" name="Fullname" onChange={inputEvent} placeholder="Full Name" value={fetchAll.Fullname} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label><b>Email:</b></label>   
                        </div>
                        <div className="col-75">
                            <input type="text" name="Email" onChange={inputEvent} placeholder="Email" value={fetchAll.Email} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label><b>Username:</b></label>   
                        </div>
                        <div className="col-75">
                            <input type="text" name="Username" onChange={inputEvent} placeholder="Username" value={fetchAll.Username} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label><b>Password:</b></label>   
                        </div>
                        <div className="col-75">
                            <input type="password" name="Password" onChange={inputEvent} placeholder="Password" value={fetchAll.Password} required/>
                        </div>
                    </div>
                    <hr/>
                    <button type="submit" >Sign Up</button>
                </form>
            </div>
           
        </div>
        </>
    )
}
export default Register;