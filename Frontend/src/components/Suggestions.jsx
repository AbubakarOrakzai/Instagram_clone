import { useState } from "react";
import { currentUser, suggestions } from "../data";

export default function Suggestions() {
  const [following, setFollowing] = useState({});
  return (
    <aside className="suggestions">
      <div className="row">
        <img className="avatar md" src={currentUser.avatar} alt="" />
        <div><strong>{currentUser.username}</strong><br /><span className="muted">{currentUser.name}</span></div>
        <button className="blue push">Switch</button>
      </div>
      <p className="muted heading">Suggested for you</p>
      {suggestions.map((u) => (
        <div className="row" key={u.id}>
          <img className="avatar sm" src={u.avatar} alt="" />
          <div><strong>{u.username}</strong><br /><span className="muted small">{u.note}</span></div>
          <button className="blue push" onClick={() => setFollowing({ ...following, [u.id]: !following[u.id] })}>
            {following[u.id] ? "Following" : "Follow"}
          </button>
        </div>
      ))}
    </aside>
  );
}