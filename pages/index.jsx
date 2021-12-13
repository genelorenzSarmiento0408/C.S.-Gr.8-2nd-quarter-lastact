import React, { useEffect, useState } from "react";
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

  console.log(offset);
  if (typeof window !== "undefined") {
    let hi = document.querySelector(".hi");
    if (hi) {
      hi.addEventListener("mouseover", () => {
        document.querySelector(".wave").style.visibility = "visible";
      });
    }
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

          <a href="https://nextjs.org/learn" className="card-ind shadow-lg">
            <h3>About Me &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
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
          Made with ❤️ by Gene Lorenz Sarmiento with
          <a href="https://nextjs.org"> Next.js</a>
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
