import Link from "next/link";

export default function grade13(): JSX.Element {
  return (
    <div>
      <main>
        <div className="card text-dark mb-3">
          <div className="card-title">
            <h1>Grade 1 - 3</h1>
          </div>
          <div className="card-body">
            <div className="card-text">
              <h2>Grade 1</h2>
              <p style={{ marginLeft: "3rem" }}>
                I was scared when I was entering grade 1. I thought Tr. Homer
                (+) and Ma&lsquo;am Lea were super strict, and when I was noisy
                I thought I would be kicked out in the class. I was included in
                the honor roll in my section. Then in Grade 3, When I was noisy,
                we were kicked out in the classroom
              </p>
              <h2>Grade 2</h2>
              <p style={{ marginLeft: "3rem" }}>
                Then in Grade 2, nothing has changed. Still in the honor roll
              </p>
              <h2>Grade 3</h2>
              <p style={{ marginLeft: "3rem" }}>
                Then in Grade 3, nothing has really changed, Im stil in the
                honor roll
              </p>
              <p style={{ textAlign: "center" }}>
                <Link href="/grade46">
                  <a> Next page &gt;</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
