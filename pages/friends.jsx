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
              <div className="card">
                <h2 className="card-title"> Friends</h2>
                <h3 className="card-text" style={{ marginLeft: "3rem" }}>
                  {ListofFriends.map((ListofFriend) => (
                    <li key={ListofFriend}>{ListofFriend}</li>
                  ))}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
