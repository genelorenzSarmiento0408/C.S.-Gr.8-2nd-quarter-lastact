import { Image } from "react-bootstrap";

const projects = () => {
  return (
    <div className="container">
      <h2> These are my Ongoing Projects:</h2>
      <div className="card">
        <div className="card-text">
          <h2>
            <a href="https://github.com/genelorenzSarmiento0408/GLS-SocMed">
              GLS Social Media App (on release Preview) &rarr;
            </a>
          </h2>
          <p style={{ marginLeft: "3.4rem" }}>Probably Twitter Clone</p>
          <h2>Image Example</h2>
          <Image src="/GLSocmedHome.png" alt="SocMed Home" fluid thumbnail />
        </div>
      </div>
    </div>
  );
};

export default projects;
