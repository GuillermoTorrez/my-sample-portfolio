import Link from "next/link";


const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
       <Link href="/"> 
         <a className="navbar-brand" >
         {/* <img src="./React-Next2.jfif" style={{width:'30%', height:'15%'}}/> */}
         <i className="fa fa-home fa-fw fa-2x" aria-hidden="true"></i>&nbsp; Home
        
         </a>       
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/github">
              <a className="nav-link">
              <i className="fab fa-github-square fa-3x"></i></a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog">
              <a className="nav-link">
              <i class="fab fa-blogger fa-3x"></i></a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
