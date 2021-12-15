import Link from "next/link";

export default function hobbies() {
  return (
    <div>
      <main>
        <div className="card">
          <h1 className="card-title">Hobbies</h1>
          <div className="card-body">
            <div className="card-text">
              <h1> List of hobbies</h1>
              <ul>
                <li>Programming</li>
                <li>Researching about new Technologies,</li>
                <li>Writing,</li>
                <li>Kinning, </li>
                <li>Stanning</li>
                <li>
                  Things I find
                  <Link href="/interests">
                    <a> interesting</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
