import React from 'react';
import EventCard from './EventCard';
import './App.css'; // Make sure you have an App.css file for styles

const eventsData = [
  // Add your events data here
  // Example:
  {
    title: "Tech Talk Series",
    description: "TechTalk is a multiple award-winning documentary TV series, that takes you on a discovery of emerging start-ups and their innovators reaching all verticals of technology.",
    imageUrl: "pics/techtalk.jpg",
    url: "http://www.thetechtalkshow.com/" // Event URL
  },
  // ... other events
  {
    title: "Coding Workshop",
    description: "Coding Events & Workshops,Live instruction, always free, hosted weekly online and in-person.",
    imageUrl: "pics/codingworkshop.jpg",
    url: "https://app.codesmith.io/coding-events" // Event URL
  },
  // ... other events
  {
    title: "Startup Pitch Night",
    description: "Meetings to pitch your start-up in a minute or less!",
    imageUrl: "pics/startuppitchnight.png",
    url: "http://www.startuppitchnight.com/startuppitchnight/" // Event URL
  },
  // ... other events
  {
    title: "Tech Job Fair",
    description: "A great opportunity to find or change to a new job, learn from the best experts in the IT & Digital industry and network with your peers.",
    imageUrl: "pics/techjobfair.png",
    url: "https://techjobsfair.com/" // Event URL
  },
  // ... other events
  {
    title: "Open Source Contribution Workshop",
    description: "This project aims to simplify and guide the way beginners make their first contribution. ",
    imageUrl: "pics/contribute.png",
    url: "https://github.com/firstcontributions/first-contributions#first-contributions" // Event URL
  },
  // ... other events
  {
    title: "Virtual Reality Experience",
    description: "A virtual reality experience that allows you to be anyone, anywhere, with anyone.",
    imageUrl: "pics/vr.jpg",
    url: "https://sandboxvr.com/" // Event URL
  },
  // ... other events
  {
    title: "Cybersecurity Seminar",
    description: "This program will support cybersecurity training in higher education institutions.",
    imageUrl: "pics/cyber.jpg",
    url: "https://cyberseminars.withgoogle.com/how-to-apply" // Event URL
  },
  // ... other events
  {
    title: "Blockchain Workshop",
    description: "In this workshop you will build a fully functioning Web3 application.",
    imageUrl: "pics/awsworkshop.png",
    url: "https://workshops.aws/categories/Blockchain" // Event URL
  },
  
  {
    title: "Hackathon Events",
    description: "Events help you to hone your skills by connecting you with the latest technologies, robust tool sets, and collective expertise.",
    imageUrl: "pics/hackertest.jpg",
    url: "https://www.openhackathons.org/s/upcoming-events" 
  },

  
  {
    title: "Networking Mixers",
    description: "An opportunity to showcase your expertise and promote your products or services.",
    imageUrl: "pics/meetup.webp",
    url: "https://www.meetup.com/find/us--fl--boca-raton/professional-networking/" 
  },
  
];

function App() {
  return (
    <div className="app-container">
      <h1>Tech Community Events</h1>
      <div className="events-grid">
        {eventsData.map((event, index) => (
          <EventCard
          key={index}
          title={event.title}
          description={event.description}
          imageUrl={event.imageUrl}
          url={event.url} // Now passing the url prop to EventCard
        />
        
        ))}
      </div>
      <footer className="app-footer">
        © 2024 Abraham Hamitou
      </footer>
    </div>
  );
}

export default App;
