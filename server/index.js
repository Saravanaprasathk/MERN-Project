const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const database=require("mysql")

const connect=express()

connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())

connect.use(express.static('public'))

connect.use(bodyparser.urlencoded({
    extended:true
}))

let databaseconnection=database.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Renish@22",
    database:"drone"
})

databaseconnection.connect(function(error){
    if(error){
    console.log(error)
}
else{
    console.log("database is connected")
}
})
connect.get('/getdata',(request,response)=>{
    let sql='select * from service'
    databaseconnection.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})

connect.get('/Admingetdata',(request,response)=>{
    let sql='select * from view'
    databaseconnection.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
connect.get('/bookgetdata',(request,response)=>{
    let sql='select * from Booking'
    databaseconnection.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
    
connect.get('/getmask/:id',(request,response)=>{
    let {id}=request.params
    let sql='select * from service where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{
        if(error){
            console.log(error)
            response.send(error)
        }
        else{
         response.send(result)

        }

    })

})

connect.get('/Admingetmask/:id',(request,response)=>{
    let {id}=request.params
    let sql='select * from view where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{ 
        if(error){
            
            response.send(error)
        }
        else{
         response.send(result)

        }

    })

})

connect.post('/delete',(request,response)=>{
    let id=request.body.id
    let sql='delete from service where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{
        if(error){
          response.send({"status":"error"})
    }
    else{
        response.send({"status":"success"})
    }
   
    })

})

connect.post('/Admindelete',(request,response)=>{
    let id=request.body.id
    let sql='delete from view where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{
        if(error){
          response.send({"status":"error"})
    }
    else{
        response.send({"status":"success"})
    }
   
    })

})

connect.post('/bookdelete',(request,response)=>{
    let id=request.body.id
    let sql='delete from Booking where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{
        if(error){
          response.send({"status":"error"})
    }
    else{
        response.send({"status":"success"})
    }
   
    })

})

connect.post('/register',(request,reponse)=>{
    let {fname,lname,phno,email,purpose,date,setuser,password}=request.body
    let sql='insert into service (fname,lname,phno,email,purpose,date,setuser,password) values(?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql,[fname,lname,phno,email,purpose,date,setuser,password],(error,result)=>{
        if(error){
            reponse.send({"status":"error"})
            console.log(error)
        }
        else{
           reponse.send({"status":"success"})
        }
    })
})

connect.post('/booking',(request,reponse)=>{
    let {username,service,date,phno,booknow}=request.body
    console.log(booknow)
    let sql='insert into Booking (username,service,date,phno,booknow) values(?,?,?,?,?)'
    databaseconnection.query(sql,[username,service,date,phno,booknow],(error,result)=>{
        if(error){
            reponse.send({"status":"error"})
            console.log(error)
        }
        else{
           reponse.send({"status":"success"})
        }
    })
})

connect.post('/Adminregister',(request,reponse)=>{
    let {d_name,service,s_hour,d_img,price}=request.body
    let sql='insert into view (d_name,service,s_hour,d_img,price) values(?,?,?,?,?)'
    databaseconnection.query(sql,[d_name,service,s_hour,d_img,price],(error,result)=>{
        if(error){
            reponse.send({"status":"error"})
            console.log(error)
        }
        else{
           reponse.send({"status":"success"})
        }
    })
})

connect.post('/login',(request,response)=>{
    let {setuser,password}=request.body
    let sql="select * from service where setuser=?"
    databaseconnection.query(sql,[setuser],(error,result)=>{
        if(error){
            response.send({"status":"Empty_set"})
        }
        else if(result.length>0){
            let dbsetuser=result[0].setuser
            let dbpassword=result[0].password
            let id=result[0].id

            if(dbsetuser===setuser && dbpassword===password){
                response.send({"status":"success","id":id})
            }
            else{
                response.send({"status":"invalid_user"})
            }
        }
        else{
            response.send({"status":"error"})
        }
    })
})

connect.post('/admin',(request,response)=>{
    let {setuser,password}=request.body
    let sql="select * from service where setuser=?"
    databaseconnection.query(sql,[setuser],(error,result)=>{
        if(error){
            response.send({"status":"Empty_set"})
        }
        else if(result.length>0){
            let dbsetuser=result[0].setuser
            let dbpassword=result[0].password
            let id=result[0].id

            if(dbsetuser===setuser && dbpassword===password){
                response.send({"status":"success","id":id})
            }
            else{
                response.send({"status":"invalid_user"})
            }
        }
        else{
            response.send({"status":"error"})
        }
    })
})


connect.put('/update/:id',(request,response)=>{
    let {id}=request.params
    let {fname,lname,phno,email,purpose,date,setuser,password}=request.body
    let sql='update service set fname=?,lname=?,phno=?,email=?,purpose=?,date=?,setuser=?,password=? where id=?'
    databaseconnection.query(sql,[fname,lname,phno,email,purpose,date,setuser,password,id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})
connect.put('/Adminsupdate/:id',(request,response)=>{
    let {id}=request.params
    let {d_name,service,s_hour,d_img,price}=request.body
    let sql='update view set d_name=?,service=?,s_hour=?,d_img=?,price=? where id=?'
    databaseconnection.query(sql,[d_name,service,s_hour,d_img,price,id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})


connect.get('/viewservice/:id',(request,response)=>{
    let {id}=request.params
    let sql='select * from view where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{ 
        if(error){
            
            response.send(error)
        }
        else{
         response.send(result)

        }

    })

})
connect.listen(3007,()=>{
    console.log("your server is running")
})
