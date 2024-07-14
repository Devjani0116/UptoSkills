import React, { useRef, useState } from 'react';
import { FaEdit, FaPlus } from 'react-icons/fa'; // Assuming FaPlus is used for the "+" sign
import { Link } from 'react-router-dom';
import img from "../assets/img.jpg";
import users from '../assets/users.svg';
import HackathonDetails from './HackathonDetails';
import './index.css';
import Navbar from './Navbar';
const colleges = [
  'St. Xavier\'s College',
  'Sophia College for Women',
  'Wilson College',
  'Jai Hind College',
  'H.R. College of Commerce and Economics',
  'Kishinchand Chellaram College',
  'Sydenham College of Commerce and Economics',
  'Mithibai College',
  'Narsee Monjee College of Commerce and Economics',
  'Rizvi College of Arts, Science, and Commerce',
  // Add more colleges as needed
];

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
    details: "This hackathon focuses on developing innovative embedded systems. Participants will have access to development kits and hardware modules.",
    submissionround:"Problem Statement: Real-Time Voice Transfer and Human Speech Filter Develop a real-time voice transfer system using two ESP32 boards. Connect two microphones to the first ESP32 and a speaker to the second ESP32 board. Implement a real-time voice transfer system between the two ESP32 boards. Utilize Bluetooth communication protocols for seamless data transfer. Minimize latency to achieve a smooth and real-time voice transfer experience. Design and Implement a Filter to selectively transmit only Human speech to the receiving ESP32.",
    finalround:"This will be a Offline round!",
     eligibility:"Students (Final year students of any graduates/disciplines)Developers and Programmers"
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
    details: "Join us for an exciting AI/ML hackathon where you will work on real-world problems. Top 3 winners will receive mentorship and cash prizes.",
    submissionround:"This will be a submission round! You will see the “Submit” button here, once the round is live.",
    finalround:"This will be a Offline round! You will see the “Enter” button here, once the round is live.",
    eligibility:"Students (Final year students of any graduates/disciplines)Developers and Programmers"
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
    details: "Develop sustainable fintech solutions in this hackathon. Participants will have access to financial APIs and data sets.",
    submissionround:"The participants will undergo sessions on the theme of the hackathon, design thinking, and problem identification. At the end of the week, the participants must submit the GAP analysis and secondary research report in PDF format.",
    finalround:"Participants will undergo mentorship sessions in the finals and submit their final pitch deck",
    eligibility:"All students and working professionals are eligible to participate.Each team can comprise 3 to 5 members, fostering a collaborative environment.Each participant is restricted to membership in only one team.Participants are required to use their own systems and are free to utilize any software tools.Any participant found engaging in unethical practices, such as cheating, plagiarism, or unauthorized use of resources, will result in the disqualification of the entire team. Upholding integrity and ethical conduct is crucial to maintaining a fair and competitive environment.Teams cannot be changed after registration."
    
  }
];


const RegistrationForm = () => {
  
  const [step, setStep] = useState(1);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editingTeamName, setEditingTeamName] = useState(false);
  const teamNameInputRef = useRef(null);
  //const { hackathonId } = useParams();
  const [requiredTeammates, setRequiredTeammates] = useState(3);
  const [selectedHackathon, setSelectedHackathon] = useState(initialHackathons[0]);// Initialize as null

 /*  useEffect(() => {
    const selected = initialHackathons.find(hackathon => hackathon.id === Number(hackathonId));
    if (selected) {
      setSelectedHackathon(selected);
      setFormData({
        ...formData,
        teamName: selected.title,
      });
    }
  }, [hackathonId]);
 */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    organization: '',
    gender: '',
    teammates: [],
    teamName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTeammateChange = (index, e) => {
    const { name, value } = e.target;
    
    const newTeammates = [...formData.teammates];
    newTeammates[index][name] = value;
    setFormData({ ...formData, teammates: newTeammates });
  };

  const addTeammate = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      teammates: [...prevFormData.teammates, { name: '' }],
    }));
  };

  const removeTeammate = (index) => {
    const newTeammates = [...formData.teammates];
    newTeammates.splice(index, 1);
    setFormData({ ...formData, teammates: newTeammates });
  };
/*   const handleNext = () => {
    // Ensure all fields in the registration form are filled before proceeding
    if (formData.name && formData.email && formData.password && formData.phoneNumber && formData.organization && formData.gender) {
      if (editing) {
        const newTeammates = [...formData.teammates];
        newTeammates[editIndex] = { name: formData.name };
        setFormData({ ...formData, teammates: newTeammates });
        setEditing(false);
        setEditIndex(null);
      } else {
        const existingTeammate = formData.teammates.find(teammate => teammate.name === formData.name);
      if (!existingTeammate) {
        setFormData({
          ...formData,
          teammates: [...formData.teammates, { name: formData.name }],
        });
      }
    }
    setStep(step + 1);
    } else {
      alert('Please fill out all fields in the registration form.');
    }
  }; */
  /* const handleBack = () => {
    setStep(step - 1);
  }; */
  const handleEditTeamName = () => {
    setEditingTeamName(true);
    if (teamNameInputRef.current) {
      teamNameInputRef.current.focus(); // Focus the Team Name input box
    }
  };

  const handleEdit = (index) => {
    setEditing(true);
    setEditIndex(index);
    const teammate = formData.teammates[index];
    setFormData({
      ...formData,
      name: teammate.name,
    });
    setStep(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTeamName) {
      setEditingTeamName(false);
      // Handle saving edited Team Name here
      localStorage.setItem('registrationData', JSON.stringify(formData));
      alert('Team Name updated successfully!');
      return; // Exit early after updating Team Name
    }
    if (formData.teammates.length < requiredTeammates) {
      alert(`Please add ${requiredTeammates - formData.teammates.length} more teammate(s).`);
      return;
    }
    if (editing) {
      const newTeammates = [...formData.teammates];
      newTeammates[editIndex] = {
        name: formData.name,
      };
      setFormData({ ...formData, teammates: newTeammates });
      setEditing(false);
      setEditIndex(null);
      setStep(2);
    } else {
      const newTeammates = [...formData.teammates];
      newTeammates[newTeammates.length - 1] = {
        name: formData.name,
      };
      setFormData({ ...formData, teammates: newTeammates });
      localStorage.setItem('registrationData', JSON.stringify(formData));
      alert('Registration details saved successfully!');
      setStep(2);

    }
  };

  return (
    <div>
      <Navbar step={step} />  
      <div className="main-container">
      <div className="hackathon-details-section">
        <HackathonDetails hackathon={selectedHackathon} />
      </div>
      <div className="registration-form">
      <div className="registration-heading">
        <img src={img} alt="Hackathon Icon" className="hackathon-icon" />
        <h2>Hackathon Registration</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization</label>
          <div className="select-container">
            <select id="organization" name="organization" value={formData.organization} onChange={handleChange} required>
              <option value="">Select</option>
              {colleges.map((college, index) => (
                <option key={index} value={college}>{college}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="teamName">Team Name</label>
          <div className="input-with-icon">
            <input type="text" id="teamName" name="teamName" value={formData.teamName} onChange={handleChange} ref={teamNameInputRef} required />
            <FaEdit className="edit-icon" onClick={handleEditTeamName} />
          </div>
        </div>
        <div className="form-group">
          <div className="teammates-label">
            <img src={users} alt="Users Icon" className="users" />
            <label>Teammates</label>
          </div>
          {formData.teammates.map((teammate, index) => (
            <div key={index} className="teammate-row">
              <input type="text" name="name" value={teammate.name} onChange={(e) => handleTeammateChange(index, e)} placeholder={`Teammate ${index + 1} Name`} required />
              <div className="teammate-actions">
                <FaEdit className="edit-icon" onClick={() => handleEdit(index)} />
                <button type="button" className="remove-button" onClick={() => removeTeammate(index)}>Remove</button>
              </div>
            </div>
          ))}
          <button type="button" className="add-button" onClick={addTeammate}>
            <FaPlus /> Add Teammate
          </button>
        </div>
        <div className="form-buttons">
          <Link to="/">
            <button type="button">Back</button>
          </Link>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
      </div>
    </div>
   
  );
};
export default RegistrationForm;
