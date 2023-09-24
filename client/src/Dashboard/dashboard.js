import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './dashboard.css'
import Dronelove from '../asset/Dronelove.jpg'
import marry from '../asset/Marry.jpg'
import nature from '../asset/nature.jpg'
import mavic from '../asset/mavic.jpg'
import race from '../asset/race.jpg'
import village from '../asset/village.jpg'
import sea from '../asset/sea.jpg'
import serviceDrone from '../asset/service.jpg'
export function Dashboard() {
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
    return (
        <>
            <h1 className="text-center">Hii,<span className="text-primary">{fname} {lname}</span> WelCome To Drone Service😊✌</h1>
            <Link to='/service' className="btn btn-info fs-2 view">view more...</Link>
            <Link to={`/Clientupdate/${id}`}>
                <button type="submit" className="btn btn-primary btn btn-large fs-2 update ">Update form</button>
            </Link>

            <div className="Astro">
           

                <div className="box">
                    <span className="first"><img src={mavic} alt="Dronelove" /></span>
                    <span className="second"><img src={marry} alt="marry" /></span>
                    <span className="third"><img src={nature} alt="nature" /></span>
                    <span className="four"><img src={Dronelove} alt="Dronelove" /></span>
                    <span className="five"><img src={race} alt="race" /></span>
                    <span className="six"><img src={village} alt="village" /></span>
                    <span className="seven"><img src={sea} alt="sea" /></span>
                    <span className="eight"><img src={serviceDrone} alt="serviceDrone" /></span>


                </div>
            </div>
        </>
    );
}