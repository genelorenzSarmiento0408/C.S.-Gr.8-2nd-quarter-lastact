import Link from "next/link";

export default function byfdni() {
  return (
    <div>
      <main>
        <div className="card">
          <h1 className="card-title">BYF/DNI</h1>
          <div className="card-body">
            <div className="card-text">
              <h4> Before You follow</h4>
              <ul>
                <li>Make sure you are NOT a toxic dream stan</li>
                <li>I tweet untranslated Tagalog</li>
                <li>
                  I make tweets about my
                  <Link href="/interests">
                    <a>Interests</a>
                  </Link>
                </li>
                {/* <li>I ship DnF and/or Karlnapity when I'm in a mood</li> */}
                <li>I&apos;m a minor</li>
              </ul>
              <h4>Do not Interact if</h4>
              <ul>
                <li>You are a creppy old dude</li>
                <li>
                  If you are below 12 or above 30 years old (except my family
                  and friends ofc)
                </li>

                <li>Dream Anti (You can criticize Dream though) </li>
                <li>IRL in Stan Acct</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
