import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export function Adminregister(){
    var{id}=useParams()

    function Handlelogin(event){
        event.preventDefault()
        var d_name=document.getElementById('d_name').value
        var service=document.getElementById('service').value
        var s_hour=document.getElementById('s_hour').value
        var d_img=document.getElementById('d_img').value
        var price=document.getElementById('price').value
       
         
         var key={
            d_name:d_name,
            service:service,
            s_hour:s_hour,
            d_img:d_img,
            price:price
           
         }

         if(d_name==''){
            alert('Enter the Drone name')
         }
         else if(service==''){
            alert('Enter the Service name')
         }
         else if(s_hour==''){
            alert('Enter the Service Hour')
         }
         else if(d_img==''){
            alert('Enter the Drone Image')
 
         }
         else if(price==''){
            alert('Enter the Price')

         }
         
         else{
            axios.post("http://localhost:3007/Adminregister",key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("Data Are Not Inserted")
                    window.location.reload()
                }
               else if(res.data.status==="success"){
                    alert("Data Are  Inserted")
                    window.location.href=`/Adminboard/${id}`
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
                        <label>DRONE NAME :</label>
                        <input type="text" placeholder="Drone Name" id="d_name"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>SERVICE :</label>
                        <input type="text" placeholder="Service" id="service"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>SERVICE HOUR  :</label>
                        <input type="text" placeholder="Service_Hour" id="s_hour"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>DRONE IMAGE :</label>
                        <input type="text" placeholder="Img src" id="d_img"/>
                    </td>
                </tr>
                <tr>
                    <td className="p-3">
                        <label>PRICE :</label>
                        <input type="amount" placeholder="Price" id="price"/>
                    </td>
                </tr>
             
                <button className="btn btn-info fs-2 bg-primary" >SUBMIT</button>
                <Link to='/Adminboard' className="btn btn-info fs-2">Update</Link>

            </table>
          
        </form>
        </>
    );
}