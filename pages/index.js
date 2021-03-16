import Layout from "./components/Layout";
import Link from "next/link";
import { skills, experiences, projects } from "../profile";

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
              <br />
              <h3>FullStack Developer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias a culpa omnis fugiat labore dolorum veritatis quos
                libero, consequatur, minus excepturi ipsam, reiciendis tempore
                eveniet debitis? Neque possimus sit reiciendis.
              </p>
              <Link href="/hireme">
                <a className="btn btn-light"> Hire me</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* second section  */}
    <div className="row py-2">
      <div className="col-md-4 h-100">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, id) => (
              <div className="py-3" key={id}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8 h-100">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <br />
            <ul>
              {experiences.map(
                ({ title, company, description, from, to }, id) => (
                  <li key={id}>
                    <h5>
                      {title} at {company}
                    </h5>
                    <h5>
                      from: {from} to {to}
                    </h5>
                    <h5>{description}</h5>
                  </li>
                )
              )}
            </ul>
            <Link href="/experiences">
              <a className="btn btn-light">Know more</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio  */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">PortFolio</h1>
            </div>
            {projects.map(({ name, description, imagen }, id) => (
              <div className="col-md-4 p-3" key={id}>
                <div className="card h-100">
                  <div className="overflow">
                    <img className="card-img-top" src={`/${imagen}`} alt="" />
                  </div>

                  <div className="card-body">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <a href="#!">Know more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
