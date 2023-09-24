import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Booking(){

    function Handlelogin(event){
        event.preventDefault()
        var username=document.getElementById('username').value
        var service=document.getElementById('service').value
        var date=document.getElementById('date').value
        var phno=document.getElementById('phno').value
        var booknow=document.getElementById('booknow').value
      
         alert(booknow)
         var key={
            username:username,
            service:service,
            date:date,
            phno:phno,
            booknow:booknow
           
         }

         if(username==''){
            alert('Enter the first name')
         }
         else if(service==''){
            alert('Enter the last name')
         }
         else if(date==''){
            alert('Enter the phone no')
         }
         else if(phno==''){
            alert('Enter the Email')
 
         }
         else if(booknow==''){
            alert('Enter the Purpose')

         }
        
         else{
            axios.post("http://localhost:3007/booking",key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("Data Are Not Inserted")
                    window.location.reload()
                }
               else if(res.data.status==="success"){
                    alert("Data Are  Inserted")
                    window.location.href='/service'
                }
            })
         }

    }
    return(
        <>
        <form className="bg-warning text-center  container-fluid form-control p-5 col-lg-12" onSubmit={Handlelogin}>
            <h1 className="text-light">Booking Form</h1>
            <table className=" bg-dark text-center text-light fs-5 col-lg-12">
                <tr>
                    <td className="p-3">
                        <label>USERNAME :</label>
                        <input type="text" placeholder="username" id="username"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>SERVICE :</label>
                        <input type="text" placeholder="service" id="service"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>DATE  :</label>
                        <input type="date" placeholder="date" id="date"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>PH.NO :</label>
                        <input type="tel" placeholder="phno" id="phno"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>BOOKNOW :</label>
                        <section> 
                          <select id="booknow">
                          <option value='Booking'>Booking</option>
                          <option value="Cancel">Cancel</option>
                          </select>
                          

                        </section>
                    </td>
                </tr>
               
                <button className="btn btn-info fs-2 bg-primary" >SUBMIT</button>
                
            </table>
          
        </form>
        </>
    );
}