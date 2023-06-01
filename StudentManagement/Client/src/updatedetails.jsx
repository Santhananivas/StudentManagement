import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import details from "./Appfunction";
import "./App.css";
import { useParams } from "react-router-dom";

function Update() {
  let userid = useParams();
  const id = parseInt(userid.id);
  console.log(id);
  console.log(typeof id);
  const [currentStudent, setCurrentStudent] = useState();
console.log(currentStudent);

  useEffect(()=>{
    axios.get(`http://localhost:8001/updatelist/${id}`).then((res)=>{
      setCurrentStudent(res?.data[0])
    }).catch((er)=>{
      throw er;
    })

  },[userid.id])

  console.log(id)

  const [name, setname] = useState("");
  const [ltname, setltname] = useState("");
  const [location, setlocation] = useState("");
  const [stuemail, setstumail] = useState("");
  const [date, setdate] = useState();
  const [education, seteducation] = useState("");
  const [stuabout, setabout] = useState("");
  const Navigate = useNavigate();

  useEffect(()=>{

    setname(currentStudent?.firstname)
    setltname(currentStudent?.lastname)
    setlocation(currentStudent?.location)
    setstumail(currentStudent?.email)
    setdate(currentStudent?.dob)
    seteducation(currentStudent?.education)
    setabout(currentStudent?.about)

  },[currentStudent])

  const Updatestudent = (e) => {
    e.preventDefault();

    //  const error=details

    axios.put(`http://localhost:8001/updatevalues`, {
      id: id,
      name: name,
      lname: ltname,
      location: location,
      email: stuemail,
      date: date,
      education: education,
      about: stuabout,
    });

   

    Navigate("/student-details");

    // <Link to={"/student-details"}></Link>

    // AddStudent.render();
  };

  return (
    <div class="container">
      <form name="detail" onSubmit={(e) => Updatestudent(e)}>
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
                  name="name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                ></input>
                <br />
                <span id="fnameerror"></span>
              </div>
            </div>
          </div>
          <div className="col-md-6 lnamediv">
            <div className="row">
              <div className="col-md-3">
                <p class="lname_p">Last Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</p>
              </div>
              <div className="col-md-9">
                <input
                  type="text"
                  class="col-9 lnameinput"
                  id="lname"
                  placeholder="lastname"
                  name="ltname"
                  value={ltname}
                  onChange={(e) => setltname(e.target.value)}
                ></input>
                <br />
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
                    name="location"
                    value={location}
                    onChange={(e) => setlocation(e.target.value)}
                  ></input>
                  <br />
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
                    type="text"
                    class=" col-9 emailinput"
                    id="email"
                    placeholder="email"
                    name="stuemail"
                    value={stuemail}
                    onChange={(e) => setstumail(e.target.value)}
                  ></input>
                  <br />
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
                    value={date}
                    // disabled={this.state.mode}
                    // value={moment (this.state.item.date).format("YYYY-MM-DD")}
                    onChange={(e) => setdate(e.target.value)}
                  ></input>
                  <br />
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
                    name="education"
                    value={education}
                    onChange={(e) => seteducation(e.target.value)}
                  ></input>
                  <br />
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
                      name="stuabout"
                      value={stuabout}
                      onChange={(e) => setabout(e.target.value)}
                    ></input>
                    <br />
                    <span id="abouterror"></span>
                    <br />

                    <input type="submit" id="submit" value="Submit"></input>
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

export default Update;
