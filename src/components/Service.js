import React from 'react'
import './service.css'  

import { FaCss3, FaReact, FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
const Service = () => {
  return (
    <>
    
  

























            <div className="container text-center my-5" style={{ backgroundColor: "white", height: "100vh",  padding :"20px"}}>


                <div className="row" >
                    <div className="core col-md-3" >
                        <FaHtml5 size={40} color="#e34c26" style={{ marginBottom: "10px" }} />
                        <h4>HTML</h4>
                        <p> HTML (HyperText Markup Language) is the standard markup language used to create web pages.
                            I learned it as part of my college-level diploma in Software Engineering.</p>
                    </div>

                    <div className="core col-md-3">
                        <FaReact size={40} color="#61dafb" style={{ marginBottom: "10px" }} />
                        <h4>React</h4>
                        <p> React is a JavaScript library for building fast and interactive user interfaces.
                            I started learning React during my advanced frontend development training.</p>
                    </div>

                    <div className="core col-md-3" >
                        <FaCss3 size={40} color="#264de4" style={{ marginBottom: "10px" }} />
                        <h4>CSS</h4>
                        <p> CSS (Cascading Style Sheets) is used to style and layout web pages.
                            I studied CSS as part of the frontend module in my Software Engineering diploma.</p>
                    </div>

                    <div className="core col-md-3" >
                        <SiJavascript size={40} color="#f0db4f" style={{ marginBottom: "10px" }} />
                        <h4>JavaScript</h4>
                        <p> JavaScript is a programming language used to create dynamic and interactive web applications.
                            It was included in my diploma syllabus and I continue to enhance my skills in it.</p>
                    </div>
                </div>



            </div>
    </>
  )
}

export default Service
