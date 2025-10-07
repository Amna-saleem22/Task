import { Link } from 'react-router-dom';
import './Navbar.css'; // External CSS file

export default function Navbar() {
  return (

    <>



      {/* 

    <nav className="navbar">
      <div className="logo">Amna</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
 */}













      <nav className="navbar navbar-expand-lg navbar-dark bg-black mt-3 mb-5">
        <div
          className="container-fluid"
          style={{ marginLeft: "80px", marginRight: "80px" }}
        >
          {/* Logo + Brand */}
          <Link
            className="navbar-brand fw-bold text-success fs-3 d-flex align-items-center"
            to="/"
          >
            <img
              src="data:image/png;base64,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"
              alt="logo"
              className="me-2 rounded-circle"
              style={{ width: "40px", height: "40px" }}
            />
            Amna
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="ms-auto d-flex align-items-center flex-column flex-lg-row">
              <Link
                to="/"   // ✅ Blog link
                className="nav-link me-lg-5 mb-2 mb-lg-0"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "white",
                  marginLeft: "20px",
                  marginRight: "20px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00d084")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                Home
              </Link>







              <Link
                to="/about"   // ✅ About link
                className="nav-link me-lg-5 mb-2 mb-lg-0"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "white",
                  marginLeft: "20px",
                  marginRight: "20px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00d084")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                About
              </Link>



















              <Link
                to="/projects"   // ✅ Blog link
                className="nav-link me-lg-5 mb-2 mb-lg-0"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "white",
                  marginLeft: "20px",
                  marginRight: "20px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00d084")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                Projects

              </Link>







              <Link
                to="/service"   // ✅ Blog link
                className="nav-link me-lg-5 mb-2 mb-lg-0"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "white",
                  marginLeft: "20px",
                  marginRight: "20px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00d084")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
               Service

              </Link>














              <Link
                to="/contact"   // ✅ Blog link
                className="nav-link me-lg-5 mb-2 mb-lg-0"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "white",
                  marginLeft: "20px",
                  marginRight: "20px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00d084")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                Contact

              </Link>




































            </div>
          </div>
        </div>
      </nav>




    </>











  );
}
