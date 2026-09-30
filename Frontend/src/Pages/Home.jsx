import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";
import Post from "../components/Post";
import Suggestions from "../components/Suggestions";
import { posts } from "../data";

export default function Home() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="feed">
        <Stories />
        {posts.map((p) => <Post key={p.id} post={p} />)}
      </main>
      <Suggestions />
    </div>
  );
}