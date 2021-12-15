import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faTwitch,
  faGithub,
  faDiscord,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Image } from "react-bootstrap";

export default function Footer() {
  let lastAct;
  if (typeof window !== "undefined") {
    if (window.location.pathname == "/") {
      lastAct = (
        <>
          <a>For the Completion of the </a>
          <a>2nd Quarter last Activity in Computer 8</a>
        </>
      );
    }
  }
  return (
    <footer>
      <h6>
        <a> Made with ❤️ by</a>
        <a href="https://github.com/genelorenzSarmiento0408/C.S.-Gr.8-2nd-quarter-lastact">
          Gene Lorenz Sarmiento
        </a>
        <a href="https://nextjs.org"> with Next.js</a>
        <a
          href="https://vercel.com/"
          style={{ justifyContent: "center", display: "flex" }}
        >
          Powered by
          <Image src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
        <br />
        {lastAct}
        <br />

        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="https://www.youtube.com/channel/UCXDTapA4tj65OYZDuNk0meQ">
            <FontAwesomeIcon
              icon={faYoutube}
              size="2x"
              style={{ marginLeft: "2rem" }}
            />
          </a>
          <a href="https://github.com/genelorenzSarmiento0408">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{
                marginLeft: "2rem",
              }}
            />
          </a>
          <br />
          <a href="https://discord.gg/cZ7JvhkxNy">
            <FontAwesomeIcon
              icon={faDiscord}
              size="2x"
              style={{
                marginLeft: "2rem",
              }}
            />
          </a>
          <a href="https://www.instagram.com/genelorenzs/">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{
                marginLeft: "2rem",
              }}
            />
          </a>
          <a href="https://twitter.com/SarmGene">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              style={{
                marginLeft: "2rem",
              }}
            />
          </a>
          <a href="https://www.twitch.tv/lorenz_sarmiento">
            <FontAwesomeIcon
              icon={faTwitch}
              size="2x"
              style={{
                marginLeft: "2rem",
              }}
            />
          </a>
        </p>
      </h6>
    </footer>
  );
}
