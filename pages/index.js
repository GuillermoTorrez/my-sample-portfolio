import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experiences, projects } from "profile";

const Index = () => (
  <Layout>
    {/**  Header Card **/}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img
                src="/personalfoto.jpeg"
                className="figure-img img-fluid rounded"
                alt=""
              />
            </div>
            <div className="col-md-8 py-4">
              <h3>Hello, my name is</h3>
              <h1>Guillermo Torrez</h1>
              <br />
              <p>
                I'm a full-stack developer specialised in frontend and backend
                development for complex scalable web apps. I write about web
                development on my blog and regularly speak at various web
                conferences and meetups. Want to know how I may help your
                project? Check out my project case studies and resume. .
              </p>
              <Link href="/hireme">
                <a className="btn btn-primary"> Hire me</a>
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
                    <img
                      className="card-img-top"
                      src={`/${imagen}`}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
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
