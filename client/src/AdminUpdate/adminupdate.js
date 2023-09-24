import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Adminupdate(){
    var {id}=useParams()

const[d_name,setD_name]=useState('')
const[service,setService]=useState('')
const[s_hour,setS_hour]=useState('')
const[d_img,setD_img]=useState('')
const[price,setPrice]=useState('')


useEffect(()=>{
    fetch("http://localhost:3007/Admingetmask/"+id)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
        setD_name(data[0].d_name)
        setService(data[0].service)
        setS_hour(data[0].s_hour)
        setD_img(data[0].d_img)
        setPrice(data[0].price)
       

    })
},[])

function Handleupdate(event){
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
        alert('Enter the first name')
     }
     else if(service==''){
        alert('Enter the last name')
     }
     else if(s_hour==''){
        alert('Enter the phone no')
     }
     else if(d_img==''){
        alert('Enter the Email')

     }
     else if(price==''){
        alert('Enter the price')

     }
    
     else{
        axios.put("http://localhost:3007/Adminsupdate/"+id,key)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("Data Are Not Updated")
                window.location.reload()
            }
           else if(res.data.status==="success"){
                alert("Data Are  Updated")
                window.location.href=`/Adminboard/${id}`
            }
        })
     }

}
    


    return(
        <>
        <div className=" fs-2 container p-5 text-center bg-dark">
            <h1 className="text-light">UPDATE DETAILS😉✌</h1>
    <form className="container container-fluid text-center justify-content-center bg-warning" onSubmit={Handleupdate}>
        <tr>
        <td><label>Drone Name :</label></td>
        <input type="text" value={d_name} id="d_name" onChange={(opr)=>setD_name(opr.target.value)}   className="fs-2 p-2 container-fluid"/>
        </tr>
        <tr>
        <td><label>Service :</label></td>
        <input type="text" value={service} id="service" onChange={(opr)=>setService(opr.target.value)}  className="fs-2 p-2 container-fluid"/>
        </tr>
        <tr>
        <td><label>Set Hour :</label></td>
        <input type="text" value={s_hour} id="s_hour" onChange={(opr)=>setS_hour(opr.target.value)}  className="fs-2 p-2 container-fluid"/>
        </tr>
        <tr>
        <td><label>Drone src :</label></td>
        <input type="text" value={d_img} id="d_img"  onChange={(opr)=>setD_img(opr.target.value)}  className="fs-2 p-2 container-fluid"/>
        </tr>
        <tr>
        <td><label>Price :</label></td>
        <input type="number" value={price} id="price" onChange={(opr)=>setPrice(opr.target.value)}  className="fs-2 p-2 container-fluid"/>
        </tr>
        

        <button className="btn btn-info fs-5 p-3">SUBMIT</button>

       
    </form>
    
</div>
        </>
    );
}