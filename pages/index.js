import Layout from "./components/Layout";
import Link from "next/link";
import {skills} from "../profile";

console.log(skills)

const Index = () => (
  <Layout>
    {/**  Header Card **/}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/personalfoto.jpeg" className="img-fluid " alt="" />
            </div>
            <div className="col-md-8 py-4">

              <h1>Guillermo Torrez</h1>
              <br/>
              <h3>FullStack Developer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias a culpa omnis fugiat labore dolorum veritatis quos
                libero, consequatur, minus excepturi ipsam, reiciendis tempore
                eveniet debitis? Neque possimus sit reiciendis.
              </p>
              <a href="/hireme"> Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* second section  */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
          <h1>Skills</h1>
          {
              skills.map(({skill, percentage}, id) => (
               <div className="py-3" key={id}>
                   <h5>{skill}</h5>
                  <div className="progress">
                  <div
                  className="progress-bar"
                  role="progressbar"
                  style={{width: `${percentage}%`}}>                    
                </div>
              </div>
              </div>
             )) 
          }
         
          </div>
        </div>
    </div>
  </div>

  </Layout>
);

export default Index;
