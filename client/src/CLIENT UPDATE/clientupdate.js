import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './clientupdate.css'

export function Clientupdate() {
    var { id } = useParams()

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phno, setPhno] = useState('')
    const [email, setEmail] = useState('')
    const [purpose, setPurpose] = useState('')
    const [date, setDate] = useState('')
    const [setuser, setSetuser] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        fetch("http://localhost:3007/getmask/" + id)
            .then(res => res.json())
            .then((data) => {

                setFname(data[0].fname)
                setLname(data[0].lname)
                setPhno(data[0].phno)
                setEmail(data[0].email)
                setPurpose(data[0].purpose)
                setDate(data[0].date)
                setSetuser(data[0].setuser)
                setPassword(data[0].password)

            })
    }, [])

    function handleupdate(event) {
        event.preventDefault()
        var fname = document.getElementById('fname').value
        var lname = document.getElementById('lname').value
        var phno = document.getElementById('phno').value
        var email = document.getElementById('email').value
        var purpose = document.getElementById('purpose').value
        var date = document.getElementById('date').value
        var setuser = document.getElementById('setuser').value
        var password = document.getElementById('password').value

        var key = {
            fname: fname,
            lname: lname,
            phno: phno,
            email: email,
            purpose: purpose,
            date: date,
            setuser: setuser,
            password: password
        }

        if (fname == '') {
            alert('Enter the first name')
        }
        else if (lname == '') {
            alert('Enter the last name')
        }
        else if (phno == '') {
            alert('Enter the phone no')
        }
        else if (email == '') {
            alert('Enter the Email')

        }
        else if (purpose == '') {
            alert('Enter the purpose')

        }
        else if (date == '') {
            alert('Enter the purpose')

        }
        else if (setuser == '') {
            alert('Enter the setuser')

        }
        else if (password == '') {
            alert('Enter the password')

        }
        else {
            axios.put("http://localhost:3007/update/" + id, key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Data Are Not Updated")
                        window.location.reload()
                    }
                    else if (res.data.status === "success") {
                        alert("Data Are  Updated")
                        window.location.href = '/Login'
                    }
                })
        }

    }



    return (
        <>
        <div className="bg-secondary p-3">
            <div className=" fs-2 container p-5 text-center bg-dark U_update">
                <h1 className="text-light">UPDATE DETAILS😉✌</h1>
                <form className="container container-fluid bg-warning text-content-center p-3" onSubmit={handleupdate}>
                    <tr>
                        <td>
                            <label>FirstName :</label></td>
                            <input type="text" value={fname} id="fname" onChange={(opr) => setFname(opr.target.value)} className="fs-2 p-2 container-fluid" />
    
                    </tr>
                    <tr>
                        <td>
                            <label>LastName :</label></td>
                            <input type="text" value={lname} id="lname" onChange={(opr) => setLname(opr.target.value)} className="fs-2 p-2 container-fluid" />
                        
                    </tr>
                    <tr>
                        <td>
                            <label>Phone :</label></td>
                           <input type="tel" value={phno} id="phno" onChange={(opr) => setPhno(opr.target.value)} className="fs-2 p-2 container-fluid" />
                        
                    </tr>
                    <tr>
                        <td>
                            <label>Email :</label></td>
                        <input type="email" value={email} id="email" onChange={(opr) => setEmail(opr.target.value)} className="fs-2 p-2 container-fluid" />
                        
                    </tr>
                    <tr>
                        <td><label>Purpose :</label></td>
                        <input type="text" value={purpose} id="purpose" onChange={(opr) => setPurpose(opr.target.value)} className="fs-2 p-2 container-fluid" />
                        
                    </tr>
                    <tr>
                        <td><label>Purpose :</label></td>
                        <input type="date" value={date} id="date" onChange={(opr) => setDate(opr.target.value)} className="fs-2 p-2 container-fluid" />
                        
                    </tr>
                    <tr>
                        <td> <label>SetUser :</label></td>
                        <input type="text" value={setuser} id="setuser" onChange={(opr) => setSetuser(opr.target.value)} className="fs-2 p-2 container-fluid" />
                        
                    </tr>
                    <tr>
                        <td>
                            <label>Password :</label></td>
                        <input type="password" value={password} id="password" onChange={(opr) => setPassword(opr.target.value)} className="fs-2 p-2 container-fluid" />
                        
                    </tr>

                    <button className="btn btn-info p-3 fs-5">UPDATED</button>


                </form>

            </div>
            </div>
        </>
    );
}