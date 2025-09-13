import React from 'react';
import Profile from './card/profile.jsx';

function App() {
  const profilesData = [
    {
      name: "John Doe",
      role: "Software Engineer",
      bio: "Passionate about coding and open-source.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      bio: "Designing intuitive user experiences.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#"
      }
    }
  ];

  return <Profile profiles={profilesData} />;
}

export default App;
