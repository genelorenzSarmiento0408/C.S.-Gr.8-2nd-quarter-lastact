import Link from "next/link";
import React from "react";

export default function grade46() {
  return (
    <div>
      <main>
        <div className="card">
          <h1 className="card-title">Grade 4 - 6</h1>
          <div className="card-body">
            <div className="card-text">
              <h2>Grade 4</h2>
              <p style={{ marginLeft: "3rem" }}>
                I was excited when I was entering grade 4. A new curriculum has
                been implemented, new guidelines on awards and recognition, a
                three-category academic excellence award. I am aiming for the
                highest honor (98-100). Then I joined the interschool quiz bee
                in our city. I studied more than my brain can process. Then I
                reached the top 3 in the quiz bee. I am very assured that I will
                be in high honor. Then I received the highest score I have ever
                gotten. The grade was 🥁🥁🥁 99 in Science. And my average is 95
                in the whole quarter. I was very joyful when I reached that.
              </p>
              <h2>Grade 5</h2>
              <p style={{ marginLeft: "3rem" }}>
                Then in Grade 5, nothing has changed, but I&lsquo;m now in the
                6th spot on the quiz bee
              </p>
              <h2>Grade 6</h2>
              <p style={{ marginLeft: "3rem" }}>
                Then in Grade 6, I was excited to graduate from it. I joined the
                quiz bee in Science and unfortunately, I was not included in the
                Top 15. Then the pandemic came we thought that the virus will
                take a few months and thought that we could graduate on the
                stage.
              </p>
              <br />
              <br />
              <br />
              <p style={{ textAlign: "center" }}>
                <Link href="/grade13">
                  <a> &lt; Last Page </a>
                </Link>
                <Link href="/highschool">
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
