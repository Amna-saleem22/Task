import './Navbar.css'; // External CSS file
import { FaCss3, FaReact, FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
export default function Home() {
    return (

        <>
            <div style={{ backgroundColor: "black", height: "90vh" }}>
                <div className='row'>
                    <div className='hel col-md-6  mt-auto mb-auto'>
                        <h1 className='heading'>Hi, I'm Amna Saleem</h1>
                        <p className='para'>
                            I am a passionate and hardworking individual with a background in Software Engineering.
                            During my diploma studies in Software Engineering, I gained hands-on experience in web development using technologies like HTML, CSS, JavaScript, PHP, C#, ASP.NET, and Flutter — all of which were part of my coursework and practical training at Aptech.
                            I am continuously learning and improving my skills to build modern, responsive, and user-friendly applications.
                            My goal is to become a professional developer and make a positive impact through technology.
                        </p>
                        <a href="/Amna_Saleem_Resume_Final.pdf"
                            className='btn btn-primary text-uppercase text-center download-btn'
                            download="Amna_Saleem_CV.pdf">
                            Download CV
                        </a>
                    </div>



                    <div className='col-md-6'>
                        <div className=' image-container'>

                            <img src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fHww" alt="Amna Saleem" className='img-fluid' />

                        </div>
                    </div>

                </div>

            </div>



            <div className="container text-center my-5">


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







            <>
            </>
            {/* <>
            <div className="contact_us_2" />
            <div className="responsive-container-block big-container" />
            <div className="blueBG">
            </div>
            <div className="responsive-container-block container" />
            <form className="form-box" />
            <div className="container-block form-wrapper">
                <p className="text-blk contactus-head">
                    Get in Touch
                </p>
                <p className="text-blk contactus-subhead">
                    Nunc erat cursus tellus gravida.
                </p>
                <div className="responsive-container-block">
                    <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                        <p className="text-blk input-title">
                            FIRST NAME
                        </p>
                        <input className="input" id="ijowk" name="FirstName" placeholder="Please enter first name..." />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">
                            LAST NAME
                        </p>
                        <input className="input" id="indfi" name="Last Name" placeholder="Please enter last name..." />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p class="text-blk input-title">
                            EMAIL
                        </p>
                        <input className="input" id="ipmgh" name="Email" placeholder="Please enter email..." />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">
                            PHONE NUMBER
                        </p>
                        <input className="input" id="imgis" name="PhoneNumber" placeholder="Please enter phone number..." />
                    </div>
                    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                        <p className="text-blk input-title">
                            WHAT DO YOU HAVE IN MIND
                        </p>Name
                        <textarea className="textinput" id="i5vyy" placeholder="Please enter query..."></textarea>
                    </div>
                </div>
                <button className="submit-btn">
                    Submit
                </button>
            </div>



</> */}



        </>


    );
}

