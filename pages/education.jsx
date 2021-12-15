import { Image, Row, Col } from "react-bootstrap";
export default function education() {
  return (
    <div>
      <main>
        <div className="card text-dark mb-3">
          <h2 className="card-title">Education</h2>
          <div className="card-body">
            <p className="card-text">
              This is my educational Background
              <br />
              (I studied at Our Lady of Lourdes Academy)
              <div className="row no-gutters">
                <Row>
                  <Col>
                    <ul>
                      <li>
                        <a href="/grade13"> Grade 1 - 3 </a>
                      </li>
                      <li>
                        <a href="/grade46"> Grade 4 - 6</a>
                      </li>
                      <li>
                        <a href="/highschool"> High School</a>
                      </li>
                    </ul>
                    Click any of the Grade for more info
                  </Col>
                  <Col>
                    Grade 4 Mr. and Ms. OLLA
                    <Image
                      src="/Mr&msollaGr4.jpg"
                      alt="Mr & Ms OLLA 2017-2018"
                      fluid
                      thumbnail
                    />
                  </Col>
                  <Col>
                    Grade 5 field trip in Liliw, Laguna Church
                    <Image
                      src="/Grade5fieldtrip.jpg"
                      alt="Grade 5 field trip"
                      fluid
                      thumbnail
                    />
                  </Col>
                </Row>
                More pictures at: <a href="/images">Images</a>
              </div>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
