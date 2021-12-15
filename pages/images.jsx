import { Image, Row, Col } from "react-bootstrap";

export default function images() {
  return (
    <div>
      <main>
        <div className="card">
          <h1 className="card-title">Images</h1>
          <div className="card-body">
            <div className="card-text">
              <h1 id="Schoolpics">School Pictures</h1>
              <div className="row no-gutters">
                <Row>
                  <Col>
                    7th Recognition Day
                    <Image src="/7thfoundationDay.jpg" fluid thumbnail />
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
                  <Col>
                    Grade 6 Graduation Picture
                    <Image src="/Gradpic.png" alt="gradpic" fluid thumbnail />
                  </Col>
                </Row>
              </div>

              <h1>GLS Media Pictures</h1>
              <div className="row no-gutters" id="SocMed">
                <Row>
                  <Col>
                    <Image src="GLSocmedHome.png" fluid thumbnail />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
