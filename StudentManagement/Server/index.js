const express=require('express')
const app=express()
const mysql=require('mysql')
const cors=require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host:'localhost',
    port:'3306',
    database:'student_data',
    user:'root',
    password:'root'
})

app.post('/' , (req,res)=>{
    const name = req.body.name
    const lname = req.body.lname
    const location = req.body.location
    const email = req.body.email
    const date = req.body.date
    const education = req.body.education
    const about = req.body.about

    db.query(
        'insert into student_data.student_details(firstname,lastname,location,email,dob,education,about) VALUES (?,?,?,?,?,?,?)',
        [name,lname,location,email,date,education,about],(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.send('insert the values')
            }
        }
    )

})

app.get("/studentdetails", (req , res)=>{
    db.query(
        'select * from student_data.student_details',(err ,result)=>{
            if (err) {
                console.log(err)
            }else{
                res.send(result)
            }
        }
    )
})

app.delete("/deletestudent/:id",(req , res)=>{
    const id = req.params.id
    db.query(
        'delete from student_data.student_details where id=?',[id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
        console.log("delete succesfully")
        }
    })
})

app.get('/updatelist/:id',(req , res)=>{
    const id= req.params.id
    db.query(
        'select * from student_data.student_details where id=?',[id],(err , result)=>{
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
        })
})

app.put('/updatevalues', (req , res)=>{
    const id=req.body.id
    //const id  = parseInt(userid.id);
    const name = req.body.name
    const lname = req.body.lname
    const location = req.body.location
    const email = req.body.email
    const date = req.body.date
    const education = req.body.education
    const about = req.body.about

    db.query(
        'update student_data.student_details set firstname=?, lastname=?, location=?, email=?, dob=?, education=?, about=? where id=?',[name,lname,location,email,date,education,about,id],(err,result)=>{
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
        }
    )
})


app.listen(8001,()=>{
    console.log('listening port 8001')
});