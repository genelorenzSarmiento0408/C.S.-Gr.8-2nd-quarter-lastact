import Link from "next/link";
import { Image, Row, Col } from "react-bootstrap";
export default function aboutme() {
  return (
    <div>
      <main>
        <div className="card">
          <h2 className="card-title">About Me </h2>
          <div className="card-text">
            <div
              className="card-text"
              style={{ fontSize: "1.5rem", marginLeft: "1.50rem" }}
            >
              Hi, I&apos;m <strong> Gene Lorenz Sarmiento</strong> I&apos;m a
              Student, Programmer, and an Entrepreneur
            </div>
            <div
              className="card-text"
              style={{ fontSize: "1.3rem", marginLeft: "1.50rem" }}
            >
              I&apos;m a grade 8 student and currently learning Full-stack web
              development and game development
            </div>
            <div
              className="card-text"
              style={{ fontSize: "1.3rem", marginLeft: "1.50rem" }}
            >
              I&apos;m capable of understanding new information at such a rapid
              pace.
            </div>
            <div className="row no-gutters">
              <Row>
                <Col className="col-12 col-sm-6">
                  <ul style={{ margin: "4rem", fontSize: "1.2rem" }}>
                    <li>
                      <strong>Nicknames:</strong> &ldquo;Gene&ldquo;,
                      &ldquo;Gene Lorenz&ldquo;, &ldquo; Lorenz&ldquo;
                    </li>

                    <li>
                      <strong>Zodiac Sign:</strong> Leo
                    </li>
                    <li>
                      <strong>Friend/s:</strong>
                      <Link href="/friends">
                        <a> List of Friends</a>
                      </Link>
                    </li>
                    <li>
                      <strong> Birthday:</strong> August 4
                    </li>
                    <li>
                      <strong>Motto: </strong> &ldquo;To learn and to
                      earn&ldquo;
                    </li>
                    <li>
                      <Link href="/education">
                        <a>
                          <strong>Educational Background </strong>
                        </a>
                      </Link>
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
      </main>
    </div>
  );
}
