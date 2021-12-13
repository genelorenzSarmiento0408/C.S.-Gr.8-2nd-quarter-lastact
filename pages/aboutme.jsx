import { Image, Row, Col } from "react-bootstrap";
export default function aboutme() {
  let Nicknames = ["Gene Lorenz ,", " Lorenz ,", " Gene"];
  return (
    <div>
      <div className="card">
        <h2 className="card-title">About Me </h2>
        <div className="card-text">
          <div className="title" style={{ fontSize: "1.5rem" }}>
            Hi, I'm <strong> Gene Lorenz Sarmiento</strong>, I'm a Student,
            Programmer, and an Entrepreneur
          </div>

          <div className="row no-gutters">
            <Row>
              <Col className="col-12 col-sm-6">
                <ul style={{ margin: "4rem", fontSize: "1.2rem" }}>
                  <li>
                    <strong>Nickname:</strong> {Nicknames}
                  </li>

                  <li>
                    <strong>Zodiac Sign:</strong> Leo
                  </li>
                  <li>
                    <strong>Bestfriend/s:</strong>
                    <a href="/friends"> List of Friends</a>
                  </li>
                  <li>
                    <strong> Birthday:</strong> August 4
                  </li>
                  <li>
                    <strong>Motto: </strong> "To learn and to earn"
                  </li>
                </ul>
              </Col>
              <Col></Col>
              <Col style={{ marginBottom: "2rem" }}>
                <Image
                  src="/Gradpic.png"
                  alt="Grad pic ko nung grade 6 ako :) "
                  fluid
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
