import { Home, Search, Compass, Clapperboard, MessageCircle, Heart, PlusSquare, Menu } from "lucide-react";
import { currentUser } from "../data";

const links = [
  { label: "Home", icon: Home },
  { label: "Search", icon: Search },
  { label: "Explore", icon: Compass },
  { label: "Reels", icon: Clapperboard },
  { label: "Messages", icon: MessageCircle },
  { label: "Notifications", icon: Heart },
  { label: "Create", icon: PlusSquare },
];

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h1 className="logo">Instagram</h1>
      <ul>
        {links.map(({ label, icon: Icon }) => (
          <li key={label}>
            <a href="#" className={label === "Home" ? "active" : ""}>
              <Icon size={24} /> <span>{label}</span>
            </a>
          </li>
        ))}
        <li>
          <a href="#"><img className="avatar sm" src={currentUser.avatar} alt="" /> <span>Profile</span></a>
        </li>
      </ul>
      <a href="#" className="more"><Menu size={24} /> <span>More</span></a>
    </nav>
  );
}