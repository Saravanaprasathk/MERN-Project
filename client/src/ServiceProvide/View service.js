import React, { useEffect, useState } from "react";


export function Viewservice(){
    const[service,setService]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3007/viewservice")
        .then(ser=>ser.json())
        .then(res=>setService(res))
    })
    return(
        <>
        <div className="container-fluid mt4">
            <div className="row">
                {
                    service.map((product,index)=>(
                       <div key={index} className="col-lg-4 col-md-4 col-sm-6 mb-4" >
                        <div className="card">
                       <img src={product.d_img}
                       alt={product.d_name}
                       className="card-img-top"
                       style={{Height:"100%",Width:"100%"}}/>
                       <div className="card-body">
                           <h2 className="card-tite">{product.d_name}</h2>
                           <h3 className="card-text">{product.service}</h3>
                           <h3 className="card-text">{product.s_hour}</h3>
                           <h3 className="card-text">Price : ₹{product.price}</h3>

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