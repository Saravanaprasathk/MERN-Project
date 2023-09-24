import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './service.css'


export function Service() {


  const [prolist, setProlist] = useState([])
  useEffect(() => {
    fetch("http://localhost:3007/Admingetdata")
      .then(store => store.json())
      .then(data => setProlist(data))
  })
  return (
    <>
      <div className="D_data container-fluid mt-4">
        <h1 className="text-center text-dark b-3">TYPES OF SERIVE PROVIDE</h1>

        <div className="">
          {
            prolist.map((product, index) => (
              <div class="card mb-3 D_image" >
                <div className="row g-0">
                  <div className="col-md-4 ">
                    <img src={product.d_img} class="img-fluid rounded-start" alt={product.d_name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 class="card-title">Drone Name :{product.d_name}</h2>
                      <h3 className="card-text">Service  :{product.service}</h3>
                      <h3 className="card-text">Duration :{product.s_hour}</h3>
                      <h3 className="card-text">Price    :₹{product.price}</h3>

                     <Link to={'/Booking'}><button className="btn btn-info">BOOKNOW!</button></Link> 


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