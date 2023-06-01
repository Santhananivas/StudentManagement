import React from "react";
//import {toast} from 'material-react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import { Toast } from "material-react-toastify/dist/components";
import { toast } from "react-toastify";

//-------------------------- react  funcion ----------------------------

    // const [name,setname]           = useState("")
    // const [ltname,setltname]       = useState("")
    // const [location,setlocation]   = useState("")
    // const [stuemail,setstumail]    = useState("")
    // const [date,setdate]           = useState()
    // const [education,seteducation] = useState("")
    // const [stuabout,setabout]      = useState("")

 
    

     function  details(e) {
     e.preventDefault();

    var fname  = document.getElementById("fname");
    var lname  = document.getElementById("lname");
    var locat  = document.getElementById("location");
    var email  = document.getElementById("email");
    var dob    = document.getElementById("dob");
    var educat = document.getElementById("education");
    var about  = document.getElementById("about");
    let isError = 0

    if (fname.value == null || fname.value == "") {
      isError = 1;
      document.getElementById('fnameerror').innerHTML = "Enter Your FirstName";
      fname.style.border = "1px solid red";
    } 
     if (lname.value == null || lname.value == "") {
      isError = 1;
      document.getElementById('lnameerror').innerHTML = "Enter Your LastName";
      lname.style.border = "1px solid red";
    } 
     if (locat.value == null || locat.value == "") {
      isError = 1;
      document.getElementById('locaterror').innerHTML = "Enter Your Location";
      locat.style.border = "1px solid red";
    } 
     if (email.value == null || email.value == "") {
      isError = 1;
      document.getElementById('emailerror').innerHTML = "Enter Your email";
      email.style.border = "1px solid red";
    } 
     if (dob.value == null || dob.value == "") {
      isError = 1;
      document.getElementById('doberror').innerHTML = "Enter Your Date Of Birth";
      dob.style.border = "1px solid red";
    } 
     if (educat.value == null || educat.value == "") {
      isError = 1;
      document.getElementById('educaterror').innerHTML = "Enter Your Education";
      educat.style.border = "1px solid red";
    } 
     if (about.value == null || about.value == "") {
      isError = 1;
      document.getElementById('abouterror').innerHTML = "Enter Your About";
      about.style.border = "1px solid red";
    } 
    
    if (isError === 0) {
        toast.success('successful',{autoClose:2000,
        }); 
    } 
  }

      

    export default details;





// ---------------------------javascript function ---------------------


    