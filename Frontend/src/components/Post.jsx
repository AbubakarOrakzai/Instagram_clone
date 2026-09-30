import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <article className="post">
      <header>
        <img className="avatar sm" src={post.avatar} alt="" />
        <strong>{post.username}</strong>
        <span className="muted">• {post.time}</span>
        <MoreHorizontal size={20} className="push" />
      </header>

      <img className="post-img" src={post.image} alt="" onDoubleClick={() => setLiked(true)} />

      <div className="actions">
        <button aria-label="Like" onClick={() => setLiked(!liked)}>
          <Heart size={26} fill={liked ? "#ed4956" : "none"} color={liked ? "#ed4956" : "currentColor"} />
        </button>
        <button aria-label="Comment"><MessageCircle size={26} /></button>
        <button aria-label="Share"><Send size={26} /></button>
        <button aria-label="Save" className="push" onClick={() => setSaved(!saved)}>
          <Bookmark size={26} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <p><strong>{(post.likes + (liked ? 1 : 0)).toLocaleString()} likes</strong></p>
      <p><strong>{post.username}</strong> {post.caption}</p>
      <button className="muted link">View all {post.comments} comments</button>

      <div className="add-comment">
        <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment…" />
        {comment.trim() && <button className="blue" onClick={() => setComment("")}>Post</button>}
      </div>
    </article>
  );
}