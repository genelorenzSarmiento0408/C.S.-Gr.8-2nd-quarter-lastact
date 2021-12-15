import { Image } from "react-bootstrap";

export default function familytree() {
  return (
    <div>
      <main>
        <div className="card">
          <h1 className="card-title">FAMILY TREE</h1>
          <Image src="/FAMILY_TREE.png" alt="Family Tree" fluid thumbnail />
        </div>
      </main>
    </div>
  );
}
