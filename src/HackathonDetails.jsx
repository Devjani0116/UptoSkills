// HackathonDetails.js
import PropTypes from 'prop-types';
import React from 'react';
const HackathonDetails = ({ hackathon }) => {
  return (
    <div className="hackathon-details">
      <h2>{hackathon.title}</h2>
      <p><strong>Organizer:</strong> {hackathon.organizer}</p>
      <p><strong>Date:</strong> {hackathon.date}</p>
      <p><strong>Prize:</strong> {hackathon.prize}</p>
      <p><strong>Participants:</strong> {hackathon.participants}</p>
      <p><strong>Type:</strong> {hackathon.type}</p>
      <p><strong>Location:</strong> {hackathon.location}</p>
      <p>{hackathon.details}</p>
      <p><strong>Submission Round:</strong> <ul className="list-disc ml-8">
        <li>{hackathon.submissionround}</li>
      </ul></p>
      <p><strong>Final Round</strong>{hackathon.finalround}</p>
      <p><strong>Eligibility:</strong>{hackathon.eligibility}</p>
    </div>
  );
};
HackathonDetails.propTypes = {
    hackathon: PropTypes.shape({
      title: PropTypes.string.isRequired,
      organizer: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      prize: PropTypes.string.isRequired,
      participants: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      submissionround:PropTypes.string.isRequired,
      finalround:PropTypes.string.isRequired,
      eligibility:PropTypes.string.isRequired
    }).isRequired,
  };
export default HackathonDetails;
