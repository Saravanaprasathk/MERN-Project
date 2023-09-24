import React from "react";
import axios from "axios";
import './login.css'

export function Login(){
    function handlelogin(event){
        event.preventDefault()
        var setuser=document.getElementById("setuser").value
        var password=document.getElementById("password").value

        var key={
            setuser:setuser,
            password:password
        }
        if(setuser==''){
            alert("plzz Enter the username ")
        }
        else if(password==''){
            alert("plz Enter the password")
        }
        else if(setuser=='Saro'){
            axios.post("http://localhost:3007/admin",key)
             .then((res)=>{
                if(res.data.status==="Empty_set"){
                alert("plz enter the setuser or register new data")
                }
                else if(res.data.status==="success"){
                    var id= res.data.id
                    alert("successfull logined")
                    window.location.href=`/dashboard/${id}/`
                }
                else if(res.data.status==="invalid_user"){
                    alert("plz Check Your Password")
                }
                else{
                    alert("Plz Register You Details First ")
                }

             })
        }
        else{
             axios.post("http://localhost:3007/login",key)
             .then((res)=>{
                if(res.data.status==="Empty_set"){
                alert("plz enter the setuser or register new data")
                }
                else if(res.data.status==="success"){
                    var id= res.data.id
                    alert("successfull logined")
                    window.location.href=`/dashboard/${id}/`
                }
                else if(res.data.status==="invalid_user"){
                    alert("plz Check Your Password")
                }
                else{
                    alert("Plz Register You Details First ")
                }

             })
             
        }
    }

    return(
        <>
        <div className="all">
            <h1 className="text-center text-light">USER LOGIN</h1>
        <div className="bg-success text-center container container-fluid p-5 U_log mt-5">
            <form onSubmit={handlelogin} className="fs-5 bg-warning">
                <label>USERNAME</label><br/>
                <input type="text" id="setuser" placeholder="setuser" name="setuser" className="p-2"/><br/>
                <label>password</label><br/>
                <input type="password" id="password" placeholder="password" name="password" className="p-2"/><br/>

                <button className="btn btn-info bg-primary text-center">SUBMIT</button>

            </form>
        </div>
        </div>
        </>
    );
}