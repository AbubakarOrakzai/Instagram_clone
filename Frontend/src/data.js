const av = (n) => `https://i.pravatar.cc/150?img=${n}`;
const pic = (n) => `https://picsum.photos/seed/insta${n}/600/600`;

export const currentUser = { username: "your_username", name: "Your Name", avatar: av(12) };

export const stories = ["ali.khan", "sara_v", "travel.pk", "foodie", "zain", "hira.art", "dev.life", "fitwithus"]
  .map((username, i) => ({ id: i, username, avatar: av(i + 20) }));

export const posts = [
  { id: 1, username: "travel.pk", avatar: av(31), image: pic(1), likes: 1243, caption: "Sunrise over the mountains ☀️", comments: 48, time: "2h" },
  { id: 2, username: "foodie", avatar: av(32), image: pic(2), likes: 872, caption: "Sunday brunch done right 🥞", comments: 23, time: "5h" },
  { id: 3, username: "hira.art", avatar: av(33), image: pic(3), likes: 2310, caption: "New piece, finished last night 🎨", comments: 91, time: "1d" },
];

export const suggestions = [
  { id: 1, username: "dev.life", avatar: av(41), note: "Followed by ali.khan" },
  { id: 2, username: "fitwithus", avatar: av(42), note: "Suggested for you" },
  { id: 3, username: "zain", avatar: av(43), note: "Followed by sara_v" },
  { id: 4, username: "sara_v", avatar: av(44), note: "New to Instagram" },
];