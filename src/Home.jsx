import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialHackathons = [
  {
    id: 1,
    title: "Embedded Development Hackathon",
    organizer: "Kiram Innovator Pvt. Ltd.",
    date: "11 days left",
    prize: "₹ 50,000",
    participants: 52,
    type: "Coding Challenge",
    location: "Bangalore",
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
    location: "Vadodara",
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
    location: "Jodhpur",
    details: "Develop sustainable fintech solutions in this hackathon. Participants will have access to financial APIs and data sets."
  }
];

function Home() {
  const [hackathons, setHackathons] = useState(initialHackathons);
  const [showForm, setShowForm] = useState(false);
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [filters, setFilters] = useState({
    name: '',
    prize: '',
    daysLeft: '',
    location: ''
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newHackathon = {
      id: hackathons.length + 1,
      title: event.target.name.value,
      organizer: event.target.college.value,
      date: "Newly added",  // You can adjust this to your needs
      prize: event.target.prize.value,
      participants: 0,  // Initially 0 participants
      type: "Unknown",  // You can add a field in the form for this if needed
      location: "Unknown",  // You can add a field in the form for this if needed
      details: event.target.comments.value
    };

    setHackathons([...hackathons, newHackathon]);
    setShowForm(false);
  };

  const handleReadMore = (hackathon) => {
    setSelectedHackathon(hackathon);
  };

  const handleCloseDetails = () => {
    setSelectedHackathon(null);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const filteredHackathons = hackathons.filter((hackathon) => {
    return (
      (filters.name === '' || hackathon.title.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.prize === '' || hackathon.prize === filters.prize) &&
      (filters.daysLeft === '' || hackathon.date === filters.daysLeft) &&
      (filters.location === '' || hackathon.location.toLowerCase().includes(filters.location.toLowerCase()))
    );
  });

  const handleHackathonSelect = (hackathon) => {
    setSelectedHackathon(hackathon);
  };



  return (
    <div className="bg-black min-h-screen text-white">
      <nav className="bg-black p-4">
        {/* Navigation content */}
      </nav>

      <header className="hidden mx-auto text-center py-20 text-white">
        {/* Header content */}
      </header>

      <div className="mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Hackathons</h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600" onClick={() => setShowForm(true)}>Add Hackathon</button>
        </div>

        <div className="flex">
          <div className="w-1/4 bg-gray-900 p-4 rounded-lg mr-4">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="mb-4">
              <label className="block mb-2">Hackathon Name</label>
              <input
                type="text"
                name="name"
                value={filters.name}
                onChange={handleFilterChange}
                className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Prize</label>
              <input
                type="text"
                name="prize"
                value={filters.prize}
                onChange={handleFilterChange}
                className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Days Left</label>
              <input
                type="text"
                name="daysLeft"
                value={filters.daysLeft}
                onChange={handleFilterChange}
                className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
              />
            </div>
          </div>

          <div className="w-3/4">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${selectedHackathon ? 'blur-md' : ''}`}>
              {filteredHackathons.map((hackathon, index) => (
                <div key={index} className={`bg-gray-800 rounded-lg p-4 transform transition duration-300 hover:scale-105 relative border-2 border-blue-500 ${selectedHackathon ? 'opacity-50' : 'opacity-100'}`}>
                  <h2 className="text-xl font-bold text-white">{hackathon.title}</h2>
                  <p className="text-gray-400">{hackathon.organizer}</p>
                  <p className="text-gray-500">{hackathon.date}</p>
                  <p className="text-yellow-400 font-bold">{hackathon.prize}</p>
                  <p className="text-gray-400">{hackathon.participants} participants</p>
                  <p className="text-blue-400">{hackathon.type}</p>
                  <p className="text-green-400">{hackathon.location}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg shadow-md hover:bg-blue-600" onClick={() => handleReadMore(hackathon)}>Read More</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedHackathon && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm z-20">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto relative text-white">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-white" onClick={handleCloseDetails}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedHackathon.title}</h2>
            <p className="text-gray-400 mb-2"><strong>Organizer:</strong> {selectedHackathon.organizer}</p>
            <p className="text-gray-500 mb-2"><strong>Date:</strong> {selectedHackathon.date}</p>
            <p className="text-yellow-400 mb-2"><strong>Prize:</strong> {selectedHackathon.prize}</p>
            <p className="text-gray-400 mb-2"><strong>Participants:</strong> {selectedHackathon.participants}</p>
            <p className="text-blue-400 mb-2"><strong>Type:</strong> {selectedHackathon.type}</p>
            <p className="text-gray-400 mb-4">{selectedHackathon.details}</p>
            <Link to={{ pathname: '/register', state: { hackathon: selectedHackathon } }}>
                      <button className="bg-blue-500 text-white py-2 px-4 rounded">Register</button>
             </Link>
          </div>
        </div>
      )}

      {showForm && (
        <div id="addnewHackathon" className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm z-20">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto text-white relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-white" onClick={() => setShowForm(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Add New Hackathon</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Hackathon Name</label>
                <input type="text" name="name" className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">College Name</label>
                <input type="text" name="college" className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Prize</label>
                <input type="text" name="prize" className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Comments</label>
                <textarea name="comments" className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
