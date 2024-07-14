import React, { useState } from 'react';

const hackathons = [
  {
    id: 1,
    title: "Embedded Development Hackathon",
    organizer: "Kiram Innovator Pvt. Ltd.",
    date: "11 days left",
    prize: "₹ 50,000",
    participants: 52,
    type: "Coding Challenge",
    details: "This hackathon focuses on developing innovative embedded systems. Participants will have access to development kits and hardware modules."
  },
  {
    id: 2,
    title: "AI/ML Hackathon 1.0",
    organizer: "Parul University, Vadodara",
    date: "15 days left",
    prize: "₹ 2,00,000",
    participants: 278,
    type: "AI/ML",
    details: "Join us for an exciting AI/ML hackathon where you will work on real-world problems. Top 3 winners will receive mentorship and cash prizes."
  },
  {
    id: 3,
    title: "Green Fintech Hackathon",
    organizer: "Indian Institute of Technology (IIT), Jodhpur",
    date: "20 days left",
    prize: "₹ 1,00,000",
    participants: 150,
    type: "Fintech",
    details: "Develop sustainable fintech solutions in this hackathon. Participants will have access to financial APIs and data sets."
  }
];

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      collegeName: event.target.college.value,
      prize: event.target.prize.value,
      comments: event.target.comments.value,
    };

    console.log('Form Data:', formData);
    alert('Form submitted! Check the console for the data.');
  };

  const handleReadMore = (hackathon) => {
    setSelectedHackathon(hackathon);
  };

  const handleCloseDetails = () => {
    setSelectedHackathon(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">Mainframe</div>
          <ul className="hidden md:flex space-x-6 text-white">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#tickets" className="hover:underline">Tickets</a></li>
            <li><a href="#hackathons" className="hover:underline">Hackathons</a></li>
          </ul>
          <a href="#contact" className="hidden md:block border border-green-500 text-green-500 py-2 px-4 rounded hover:bg-green-500 hover:text-white">Contact</a>
          <div className="md:hidden">
            <button id="menu-button" className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div id="mobile-menu" className="md:hidden hidden">
          <ul className="space-y-2 text-white">
            <li><a href="#home" className="block py-2 px-4 hover:bg-gray-700">Home</a></li>
            <li><a href="#about" className="block py-2 px-4 hover:bg-gray-700">About</a></li>
            <li><a href="#tickets" className="block py-2 px-4 hover:bg-gray-700">Tickets</a></li>
            <li><a href="#judges" className="block py-2 px-4 hover:bg-gray-700">Judges</a></li>
            <li><a href="#contact" className="block py-2 px-4 border border-green-500 rounded hover:bg-green-500 hover:text-white">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hidden mx-auto text-center py-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Mainframe <span className="text-green-500">Hacker Online</span> 3.0</h1>
        <p className="mt-4 text-lg md:text-xl">We Invite You!</p>
        <p className="mt-4 max-w-2xl mx-auto">An event where designers and developers work together to solve a problem and create a new solution, application or service. Top 3 contestants all receive custom prizes. Put your skills to the test in the Mainframe and sign up today.</p>
        <div className="mt-6">
          <a href="#register" className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600">Register</a>
        </div>
        <div className="mt-4 max-w-sm mx-auto">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-green-500" />
          <button className="w-full mt-2 bg-green-500 text-white py-2 rounded hover:bg-green-600">Subscribe</button>
        </div>
      </header>

      <div className="mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Hackathons</h1>
          <button id="add-card" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600" onClick={() => setShowForm(true)}>Add Hackathon</button>
        </div>
        <div id="cards-container" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${selectedHackathon ? 'blur-md' : ''}`}>
          {hackathons.map((hackathon, index) => (
            <div key={index} className={`bg-white rounded-lg p-4 transform transition duration-300 hover:scale-105 relative border-2 border-blue-500`}>
              <h2 className="text-xl font-bold">{hackathon.title}</h2>
              <p className="text-gray-700">{hackathon.organizer}</p>
              <p className="text-gray-500">{hackathon.date}</p>
              <p className="text-yellow-500 font-bold">{hackathon.prize}</p>
              <p className="text-gray-700">{hackathon.participants} participants</p>
              <p className="text-blue-500">{hackathon.type}</p>
              <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg shadow-md hover:bg-blue-600" onClick={() => handleReadMore(hackathon)}>Read More</button>
            </div>
          ))}
        </div>
      </div>

      {selectedHackathon && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto relative">
            <h2 className="text-2xl font-bold mb-4">{selectedHackathon.title}</h2>
            <p className="text-gray-700 mb-2"><strong>Organizer:</strong> {selectedHackathon.organizer}</p>
            <p className="text-gray-500 mb-2"><strong>Date:</strong> {selectedHackathon.date}</p>
            <p className="text-yellow-500 mb-2"><strong>Prize:</strong> {selectedHackathon.prize}</p>
            <p className="text-gray-700 mb-2"><strong>Participants:</strong> {selectedHackathon.participants}</p>
            <p className="text-blue-500 mb-2"><strong>Type:</strong> {selectedHackathon.type}</p>
            <p className="text-gray-700 mb-4">{selectedHackathon.details}</p>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600" onClick={handleCloseDetails}>Close</button>
          </div>
        </div>
      )}

      {showForm && (
        <div id="addnewHackathon" className="mx-auto mt-12 p-6 bg-gray-900 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-white">Add New Hackathon</h1>
          <form id="hackathon-form" className="mt-6" onSubmit={handleFormSubmit}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />

            <label htmlFor="college" className="block mt-4 text-sm font-medium text-gray-300">College Name</label>
            <input type="text" id="college" name="college" className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />

            <label htmlFor="prize" className="block mt-4 text-sm font-medium text-gray-300">Price</label>
            <input type="number" id="prize" name="prize" className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required />

            <label htmlFor="comments" className="block mt-4 text-sm font-medium text-gray-300">Comments</label>
            <textarea id="comments" name="comments" rows="4" className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" required></textarea>

            <button type="submit" className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Home;
