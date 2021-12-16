import Link from "next/link";

export default function highschool() {
  return (
    <div>
      <main>
        <div className="card">
          <h1 className="card-title">Highschool (Grade 7&8)</h1>
          <div className="card-body">
            <div className="card-text">
              <h1>Grade 7</h1>
              <p style={{ marginLeft: "3rem" }}>
                This year was rough, This is the first school year to experience
                Online Classes. Some major changes. We had a problem from the
                1st quarter when they made a way to fix it then the rest was ok
              </p>
              <h1>Grade 8</h1>
              <p style={{ marginLeft: "3rem" }}>
                It was the same as the 7th grade and my former classmate are
                back.
              </p>
              <br /> <br />
              <p style={{ textAlign: "center" }}>
                <Link href="/grade46">
                  <a> &lt; Last Page </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
