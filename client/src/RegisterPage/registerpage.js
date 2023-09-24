import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Register(){

    function Handlelogin(event){
        event.preventDefault()
        var fname=document.getElementById('fname').value
        var lname=document.getElementById('lname').value
        var phno=document.getElementById('phno').value
        var email=document.getElementById('email').value
        var purpose=document.getElementById('purpose').value
        var date=document.getElementById('date').value
        var setuser=document.getElementById('setuser').value
        var password=document.getElementById('password').value
         
         var key={
            fname:fname,
            lname:lname,
            phno:phno,
            email:email,
            purpose:purpose,
            date:date,
            setuser:setuser,
            password:password
         }

         if(fname==''){
            alert('Enter the first name')
         }
         else if(lname==''){
            alert('Enter the last name')
         }
         else if(phno==''){
            alert('Enter the phone no')
         }
         else if(email==''){
            alert('Enter the Email')
 
         }
         else if(purpose==''){
            alert('Enter the Purpose')

         }
         else if(date==''){
            alert('Enter the Date')

         }
         else if(setuser==''){
            alert('Enter the SetUser')

         }
        
        else if(password==''){
           alert('Enter the password')

        }
         else{
            axios.post("http://localhost:3007/register",key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("Data Are Not Inserted")
                    window.location.reload()
                }
               else if(res.data.status==="success"){
                    alert("Data Are  Inserted")
                    window.location.href='/login'
                }
            })
         }

    }
    return(
        <>
        <form className="bg-warning text-center  container-fluid form-control p-5 col-lg-12" onSubmit={Handlelogin}>
            <h1 className="text-light">USER FORM</h1>
            <table className=" bg-dark text-center text-light fs-5 col-lg-12">
                <tr>
                    <td className="p-3">
                        <label>FIRST NAME :</label>
                        <input type="text" placeholder="First Name" id="fname"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>LAST NAME :</label>
                        <input type="text" placeholder="Last Name" id="lname"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>PH.NO  :</label>
                        <input type="number" placeholder="phone" id="phno"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>EMAIL :</label>
                        <input type="email" placeholder="Email" id="email"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>PURPOSE :</label>
                        <input type="text" placeholder="Purpose" id="purpose"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>DATE :</label>
                        <input type="date" placeholder="Date" id="date"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>SETUSER :</label>
                        <input type="text" placeholder="SetUserName" id="setuser"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>PASSWORD :</label>
                        <input type="password" placeholder="password" id="password"/>
                    </td>
                </tr>
                <button className="btn btn-info fs-2 bg-primary" >SUBMIT</button>
                
            </table>
          
        </form>
        </>
    );
}