import { stories } from "../data";

export default function Stories() {
  return (
    <div className="stories">
      {stories.map((s) => (
        <button key={s.id} className="story">
          <span className="ring"><img className="avatar" src={s.avatar} alt={s.username} /></span>
          <small>{s.username}</small>
        </button>
      ))}
    </div>
  );
}