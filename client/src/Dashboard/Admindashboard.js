import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import './admindashboard.css'

export function Adminboard() {
    var { id } = useParams()
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    useEffect(() => {
        fetch("http://localhost:3007/getmask/" + id)
            .then(res => res.json())
            .then((output) => {
                setFname(output[0].fname)
                setLname(output[0].lname)
            })


    })

    {/* <DELETE AND UPDATE FOR ADMIN> */ }

    const [prolist, setProlist] = useState([])
    useEffect(() => {
        fetch("http://localhost:3007/Admingetdata")
            .then(store => store.json())
            .then(data => setProlist(data))
    })


    const delt = (id) => {
        var key = { id: id }
        axios.post("http://localhost:3007/Admindelete", key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("Data Are Not Deleted")
                }
                else if (res.data.status === "success") {
                    alert("Data Are Deleted")
                }
            })
    }



    return (
        <>
        <div className="All">
        <div className="text-center p-5 align-item-center">
            <h1 className="text-light">Hii,<span className="text-primary">{fname} {lname}</span>  Your Are WelCome😁✌</h1>
            <Link to='/service' className="btn btn-info fs-1 L">view more...</Link>
            <Link to='/Adminregister' className="btn btn-info fs-1 L">Register</Link>
            <Link to='/Clientdetails' className="btn btn-info fs-1 L">Client Details</Link>
            <Link to='/Bookdetails' className="btn btn-info fs-1 L">Booking Details</Link>
        </div>

            {/* <REGISTER AND UPDATE DETAILS> */}




            <div className=" container-fluid ">
                <div className="row">
                    {
                        prolist.map((product, index) => (
                            <div className="card mb-3">
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img src={product.d_img} class="img-fluid rounded-start" alt={product.d_name}/>                              
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h2 className="card-title">Drone Name : {product.d_name}</h2>
                                  <h3 className="card-text">Service  :{product.service}</h3>
                                  <h3 className="card-text">Duration :{product.s_hour}</h3>
                                  <h3 className="card-text">Price    : ₹{product.price}</h3>
                                    <Link to={`/Adminupdate/${product.id}`}>
                                                <button type="submit" className="btn btn-primary btn btn-large p-3 fs-5 ">Update form</button>
                                              </Link>
                                                              <button className="btn btn-info p-2 fs-3" onClick={() => { delt(product.id) }}>DELETE</button>
                          
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          
                          
                        ))
                    }

                </div>

            </div>
            </div>
        </>
    );
}