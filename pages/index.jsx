import React, { useEffect, useState } from "react";
import $ from "jquery";
export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let Onscroll = (window.onscroll = () => {
      setOffset(window.pageYOffset);
    });
    return (Onscroll = window.onscroll =
      () => {
        setOffset(window.pageYOffset);
      });
  }, []);
  if (typeof window !== "undefined") {
    $(".hi").on("mouseover", function () {
      $(".wave").css({ visibility: "visible" });
    });
  }
  return (
    <div>
      <main>
        <div className="intro">
          <h1 className="hi">Hi!</h1>
          <h1 className="wave">👋</h1>
        </div>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card-ind shadow-lg">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/aboutme" className="card-ind shadow-lg">
            <h3>About Me &rarr;</h3>
            <p>Learn more about me and facts about me </p>
          </a>

          <a href="/hobbies" className="card-ind shadow-lg">
            <h3>Hobbies &rarr;</h3>
            <p>Discover my Hobbies</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card-ind shadow-lg"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <footer>
        <p>
          &#160; &#160; Made with ❤️ by
          <a href="https://github.com/genelorenzSarmiento0408/C.S.-Gr.8-2nd-quarter-lastact">
            Gene Lorenz Sarmiento
          </a>
          <a href="https://nextjs.org"> with Next.js</a>
          <a
            href="https://vercel.com/"
            style={{ justifyContent: "center", display: "flex" }}
          >
            Powered by
            <img src="/vercel.svg" alt="Vercel" className="logo" />
          </a>
        </p>
      </footer>
    </div>
  );
}
