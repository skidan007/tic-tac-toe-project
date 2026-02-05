import React from "react";
export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = React.useState(false);

    function handleEdit() {
        setIsEditing(editing => !editing);
    }

    let playerName = <span className="player-name">{name}</span>;

    if (isEditing) {
        playerName = <input type="text" required />;
    }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
