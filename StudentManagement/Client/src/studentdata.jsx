import React, { useEffect, useState } from 'react';
//import App from './App';
import axios from 'axios';
//import { useState } from 'react';
import Home from './Home';
import './studentdata.css';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/fa'
import {library} from '@fortawesome/fontawesome-svg-core'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import swal from 'sweetalert'
//import DeleteIcon from '@mui/icons-material/Delete'

  
   const deleteuser=(id)=>{
   swal("Success","your data has delete","success")
    axios.delete(`http://localhost:8001/deletestudent/${id}`)
    console.log(id);
   // toast.warning('confirm to delete');
   }



   


    const Studentdetails = ()=>{

      const [studentlist,setstudentlist]=useState([])



      axios.get('http://localhost:8001/studentdetails').then((response) =>{
        setstudentlist(response.data)
      })


      return(
        
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Link to={'/'}><button id='submitbtn'>Add</button></Link>
            </div>
          </div> 
          <div className='row'>
            <div className='col-12 studenttable'>
              <Table>
                <thead>
                  <tr>
                    <th>Stu Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Dob</th>
                    <th>Education</th>
                    <th>About</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {studentlist.map((val)=>{
                    return(
                      <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.firstname}</td>
                        <td>{val.lastname}</td>
                        <td>{val.location}</td>
                        <td>{val.email}</td>
                        <td>{val.dob}</td>
                        <td>{val.education}</td>
                        <td>{val.about}</td>
                        <td id='uppdate'><Link to={`/updatedetails/${val.id}`}><i class="fa fa-edit" /></Link></td>
                        <td><button onClick={()=>{deleteuser(val.id)}} id='delete'><i className='fa-solid fa-trash' /></button></td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      )
 



  }


 export default Studentdetails; 

