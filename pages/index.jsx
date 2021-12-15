import $ from "jquery";

export default function Home() {
  if (typeof window !== "undefined") {
    $(".hi").on("mouseover", function () {
      $(".wave").css({ visibility: "visible" });
    });
  }
  return (
    <div>
      <main>
        <div className="intro">
          <h1 className="hi"> Hi!</h1>
          <h1 className="wave">👋</h1>
        </div>

        <h4 style={{ textAlign: "center" }}>Click any of the boxes</h4>

        <div className="grid">
          <a href="/byfdni" className="card-ind shadow-lg">
            <h3>BYF / DNI &rarr;</h3>
            <p>Before you follow && Do not interact if </p>
          </a>

          <a href="/aboutme" className="card-ind shadow-lg">
            <h3>About Me &rarr;</h3>
            <p>Learn more about me and facts about me </p>
          </a>

          <a href="/hobbies" className="card-ind shadow-lg">
            <h3>Hobbies &rarr;</h3>
            <p>Discover my Hobbies</p>
          </a>
          <a href="/education" className="card-ind shadow-lg">
            <h3>Education &rarr;</h3>
            <p>My Educational background</p>
          </a>
        </div>
      </main>
    </div>
  );
}
