export default function friends() {
  let ListofFriends = [
    " Jenice ,",
    " Ram ,",
    " Kathlyn ,",
    " Beizelle ,",
    " Matt ,",
    " Justine ,",
    " Psyche ,",
    " Jose ,",
    " Margaux ,",
    " Tierra ,",
    " Natalie ,",
    " Beatrice ,",
    " Tony ,",
    " Ate Ellise ,",
    " Coolona/Lona ,",
    " Choco ,",
    " Alan Jeremy ,",
    " Thea ,",
    " Elaine ,",
    " Ate Rei ,",
    " Zyrill ",
  ];
  console.log("Friends: " + ListofFriends.length);
  return (
    <div>
      <main>
        <div className="card">
          <div className="card-body">
            <div className="card-text">
              <div class="card">
                <h2 class="card-title"> Friends</h2>
                <h3 class="card-text" style={{ marginLeft: "3rem" }}>
                  {ListofFriends}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
