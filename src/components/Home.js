import './Navbar.css'; // External CSS file
import { useNavigate } from 'react-router-dom';
export default function Home() {



    const navigate = useNavigate();

const click =()=> {
    navigate('/service')
}

const hello =() => {
    console.log('amna')
}
    
    return (




        <>
            <div style={{ backgroundColor: "white", height: "90vh" }}>
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
                            className='btn btn-success text-uppercase text-center download-btn'
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


                

 <section className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-3">Services</h2>
        <p className="text-muted mx-auto mb-4" style={{ maxWidth: "600px" }}>
          I provide modern, responsive, and high-quality web development
          services to help bring your ideas to life with clean and efficient
          code.</p>
        
        <button
          onClick={click}
          className="btn btn-primary px-4 py-2 rounded-pill"
        >
          View All Services
        </button>
      </div>
    </section>



<section className="py-5 bg-light text-center">
          <button className="btn btn-primary px-4 py-2 rounded-pill" onClick={hello} >check me</button>
</section>

          
        </>


    );
}

