import { useState } from "react";
import "./App.css";
import React from "react";
//import { ReactDOM } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import "./Appfunction"
import details from "./Appfunction";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
//import 'material-react-toastify/dist/ReactToastify.css';
//import{toast} from 'material-react-toastify';
//import Home from './Home'
//import { Router,Route } from "react-router-dom";
//import {BrowserRouter as Router ,Route ,Link, NavLink,Switch} from "react-router-dom"





function Home() {

 //----------------------------server function--------------------------

    const [name,setname]           = useState("")
    const [ltname,setltname]       = useState("")
    const [location,setlocation]   = useState("")
    const [stuemail,setstumail]    = useState("")
    const [date,setdate]           = useState()
    const [education,seteducation] = useState("")
    const [stuabout,setabout]      = useState("")


    const Navigate=useNavigate();


    const AddStudent = (e) => {
      e.preventDefault();

      const error = details(e);

      if(name==0 || ltname==0 ||location==0 || stuemail==0 || date==0 || education==0 || stuabout==0){
        swal({
          title:"!!!!!!",
          text:'please enter the values',
          icon:'error'
        });
      } else{
        swal('Success','your form has submited successfully','success');
        axios.post('http://localhost:8001',{
        name:name,
        lname:ltname,
        location:location,
        email:stuemail,
        date:date,
        education:education,
        about:stuabout
      })
        Navigate('/student-details')
      }

      //const notify=()=>toast('your form has submitted Successfully'
      
      

     // <Link to={"/student-details"}></Link>
      


      // AddStudent.render();

      
    }
  



    
    //-------------------------------------Navigate---------------------------
    
      

    


    //----------------------------------studentdetails  ---------------------------


  return (
    <div class="container">
      <form name="detail" onSubmit={(e)=>AddStudent(e)}>
        <div className="row">
          <div className="col-md-6 fnamediv">
          <div className="row">
            <div className="col-md-3">
            <p class="fname_p">First Name &nbsp;&nbsp;&nbsp;&nbsp;:</p>
            </div>
            <div className="col-md-9">
            <input
              type="text"
              class="col-9 fnmaeinput"
              id="fname"
              placeholder="firstname"
              name="name" onChange={(e)=> setname(e.target.value)}
            ></input><br/>
            <span id="fnameerror"></span>
            </div>
          </div>
          </div>
          <div className="col-md-6 lnamediv">
            <div className="row">
              <div className="col-md-3">
              <p class="lname_p">
              Last Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
            </p>
              </div>
              <div className="col-md-9">
              <input
              type="text"
              class="col-9 lnameinput"
              id="lname"
              placeholder="lastname"
              name="ltname" onChange={(e)=> setltname(e.target.value)}
            ></input><br/>
            <span id="lnameerror"></span>
              </div>
            </div>
          </div>
          <div id="leftsite" className="col-6">

          <div class="col-12 locationdiv">
          <div className="row">
            <div className="col-3">
            <p class=" location_p">
            Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
          </p>
            </div>
            <div className="col-md-9">
            <input
            type="text"
            class="col-9 locationinput"
            id="location"
            placeholder="location"
            name="location" onChange={(e) => setlocation(e.target.value)}
          ></input><br/>
          <span id="locaterror"></span>
            </div>
          </div> 
        </div>

        <div class="col-12 emaildiv">
          <div className="row">
            <div className="col-3">
            <p class=" email_p">
            Email
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            :
          </p>
            </div>
            <div className="col-9">
            <input
            type="email"
            class=" col-9 emailinput"
            id="email"
            placeholder="email"
            name="stuemail" onChange={(e) => setstumail(e.target.value)}
          ></input><br/>
          <span id="emailerror"></span>
            </div>
          </div>
        </div>

        <div class="col-12 dobdiv">
          <div className="row">
            <div className="col-3">
            <p class=" dob_p">
            D.o.b&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          </p>
            </div>
            <div className="col-md-9">
            <input
            type="date"
            class="col-9 dobinput"
            id="dob"
            placeholder=""
            name="date"
           // disabled={this.state.mode}
           // value={moment (this.state.item.date).format("YYYY-MM-DD")}
            onChange={(e) => setdate(e.target.value)}
          ></input><br/>
          <span id="doberror"></span>
            </div>
          </div>
        </div>

        <div class="col-12 educationdiv">
          <div className="row">
            <div className="col-3">
            <p class=" education_p">
            Education &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          </p>
            </div>
            <div className="col-9">
            <input
            type="text"
            class="col-9 educationinput"
            id="education"
            placeholder="education"
            name="education" onChange={(e) => seteducation(e.target.value)}
          ></input><br/>
          <span id="educaterror"></span>
            </div>
          </div>
        </div>

        <div class="col-12 aboutdiv">
          <div className="row">
          <div class="col-3" id="aboutdiv">
            <p class="col-6 about_p">
              About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </p>
          </div>
          <div className="col-md-9">
          <div id="aboutinput">
            <input
              type="text"
              class="col-9 aboutinput"
              id="about"
              placeholder="about"
              textarea="200"
              name="stuabout" onChange={(e) => setabout(e.target.value)}
            ></input><br/>
            <span id="abouterror"></span>
            <br />
            
            <input type="submit" id="submit" value="Submit" ></input>
            <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            
          </div>
          </div>
          </div>
        </div>



          </div>
        
        </div>
      </form>
    </div>
  );
}

export default Home;


