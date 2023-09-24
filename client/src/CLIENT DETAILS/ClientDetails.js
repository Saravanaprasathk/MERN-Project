import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import User from '../asset/clientlogo.jpg';
import './clientdetails.css';


export function Clientdetails(){
   const [prolist, setProlist] = useState([])
   useEffect(() => {
      fetch("http://localhost:3007/getdata")
         .then(store => store.json())
         .then(data => setProlist(data))
   })
   const delt=(id)=>{
       var key={id:id}
       axios.post("http://localhost:3007/delete",key)
       .then((res)=>{
         if(res.data.status==="error"){
            alert("Data Are Not Deleted")
         }
         else if(res.data.status==="success"){
            alert("Data Are Deleted")
         }
       })
   }

   return(
    <>
    <h1 className="text-center text-dark b-3 head">TYPE OF USERS✌</h1>
     <div className="container-fluid container mt4 U_body">
                <div className="row">
                    {
                        prolist.map((product, index) => (
                            <div className="card mb-3 U_card">
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img src={User} class="img-fluid rounded-start U_image" alt="Users"/>                              
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                <h2 className="card-title">First Name : {product.fname}</h2>
                                  <h3 className="card-text">Last Name  :{product.lname}</h3>
                                  <h3 className="card-text">Phno :{product.phno}</h3>
                                  <h3 className="card-text">Email    : {product.email}</h3>
                                  <h3 className="card-text">Purpose    : {product.purpose}</h3>
                                  <h3 className="card-text">Date    : {product.date}</h3>
                                 
                                
                                <button className="btn btn-info p-2 fs-3" onClick={() => { delt(product.id) }}>DELETE</button>
                          
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          
                          
                        ))
                    }

                </div>

            </div>
    </>
   );
}
