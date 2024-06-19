import React from 'react';
import './Register.css';


const RegistrationForm = () => {
  return (
    <div className="glass-container">
      <h2>DevWrap - From Sketch To Solution</h2>
      <form id="registration-form" action="https://script.google.com/macros/s/AKfycbwdgAzizdafgp1LXxywoYPzWol46EgsNP5iUeW3rZJl_lhaS0cpQMROCWhHpqT_ZimO/exec" method="POST">
        {/* Team Name */}
        <div className="input-container">
          <label htmlFor="TeamName">Team Name</label>
          <input type="text" id="TeamName" name="TeamName" placeholder="Enter Team Name" required />
        </div>

        {/* Team Captain Name */}
        <div className="input-container">
          <label htmlFor="TeamCaptainName">Team Captain Name</label>
          <input type="text" id="TeamCaptainName" name="TeamCaptainName" placeholder="Enter Team Captain Name" required />
        </div>

        {/* Team Captain Mail Id */}
        <div className="input-container">
          <label htmlFor="TeamCaptainMailId">Team Captain Mail Id</label>
          <input type="email" id="TeamCaptainMailId" name="TeamCaptainMailId" placeholder="Enter Team Captain Mail Id" required />
        </div>

        {/* Team Captain GitHub */}
        <div className="input-container">
          <label htmlFor="TeamCaptainGitHub">Team Captain GitHub</label>
          <input type="text" id="TeamCaptainGitHub" name="TeamCaptainGitHub" placeholder="Enter Team Captain GitHub" required />
        </div>

        {/* Team Captain LinkedIn */}
        <div className="input-container">
          <label htmlFor="TeamCaptainLinkedIn">Team Captain LinkedIn</label>
          <input type="text" id="TeamCaptainLinkedIn" name="TeamCaptainLinkedIn" placeholder="Enter Team Captain LinkedIn" required />
        </div>

        {/* Team Captain Roll Number */}
        <div className="input-container">
          <label htmlFor="TeamCaptainRollNumber">Team Captain Roll Number</label>
          <input type="text" id="TeamCaptainRollNumber" name="TeamCaptainRollNumber" placeholder="Enter Team Captain Roll Number" required />
        </div>

        {/* Team Captain Year */}
        <div className="input-container">
          <label htmlFor="TeamCaptainYear">Team Captain Year</label>
          <select id="TeamCaptainYear" name="TeamCaptainYear" required>
            <option value="">Select Your Year</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
          </select>
        </div>

        {/* Team Captain Stream */}
        <div className="input-container">
          <label htmlFor="TeamCaptainStream">Team Captain Stream</label>
          <select id="TeamCaptainStream" name="TeamCaptainStream" required>
            <option value="">Select Your Stream</option>
            <option value="ECE1">ECE1</option>
            <option value="ECE2">ECE2</option>
            <option value="ECE3">ECE3</option>
            <option value="CSE1">CSE1</option>
            <option value="CSE2">CSE2</option>
            <option value="CSE3">CSE3</option>
            <option value="CSBS">CSBS</option>
            <option value="EE">EE</option>
            <option value="EEE">EEE</option>
            <option value="ME">ME</option>
            <option value="MCA">MCA</option>
          </select>
        </div>

        {/* Member 1 Name */}
        <div className="input-container">
          <label htmlFor="Member1Name">Member 1 Name</label>
          <input type="text" id="Member1Name" name="Member1Name" placeholder="Enter Member 1 Name" required />
        </div>

        {/* Member 1 Mail Id */}
        <div className="input-container">
          <label htmlFor="Member1MailId">Member 1 Mail Id</label>
          <input type="email" id="Member1MailId" name="Member1MailId" placeholder="Enter Member 1 Mail Id" required />
        </div>

        {/* Member 1 GitHub */}
        <div className="input-container">
          <label htmlFor="Member1GitHub">Member 1 GitHub</label>
          <input type="text" id="Member1GitHub" name="Member1GitHub" placeholder="Enter Member 1 GitHub" required />
        </div>

        {/* Member 1 LinkedIn */}
        <div className="input-container">
          <label htmlFor="Member1LinkedIn">Member 1 LinkedIn</label>
          <input type="text" id="Member1LinkedIn" name="Member1LinkedIn" placeholder="Enter Member 1 LinkedIn" required />
        </div>

        {/* Member 1 Roll Number */}
        <div className="input-container">
          <label htmlFor="Member1RollNumber">Member 1 Roll Number</label>
          <input type="text" id="Member1RollNumber" name="Member1RollNumber" placeholder="Enter Member 1 Roll Number" required />
        </div>

        {/* Member 1 Year */}
        <div className="input-container">
          <label htmlFor="Member1Year">Member 1 Year</label>
          <select id="Member1Year" name="Member1Year" required>
            <option value="">Select Your Year</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
          </select>
        </div>

        {/* Member 1 Stream */}
        <div className="input-container">
          <label htmlFor="Member1Stream">Member 1 Stream</label>
          <select id="Member1Stream" name="Member1Stream" required>
            <option value="">Select Your Stream</option>
            <option value="ECE1">ECE1</option>
            <option value="ECE2">ECE2</option>
            <option value="ECE3">ECE3</option>
            <option value="CSE1">CSE1</option>
            <option value="CSE2">CSE2</option>
            <option value="CSE3">CSE3</option>
            <option value="CSBS">CSBS</option>
            <option value="EE">EE</option>
            <option value="EEE">EEE</option>
            <option value="ME">ME</option>
            <option value="MCA">MCA</option>
          </select>
        </div>

        {/* Member 2 Name */}
        <div className="input-container">
          <label htmlFor="Member2Name">Member 2 Name</label>
          <input type="text" id="Member2Name" name="Member2Name" placeholder="Enter Member 2 Name" />
        </div>

        {/* Member 2 Mail Id */}
        <div className="input-container">
          <label htmlFor="Member2MailId">Member 2 Mail Id</label>
          <input type="email" id="Member2MailId" name="Member2MailId" placeholder="Enter Member 2 Mail Id" />
        </div>

        {/* Member 2 GitHub */}
        <div className="input-container">
          <label htmlFor="Member2GitHub">Member 2 GitHub</label>
          <input type="text" id="Member2GitHub" name="Member2GitHub" placeholder="Enter Member 2 GitHub" />
        </div>

        {/* Member 2 LinkedIn */}
        <div className="input-container">
          <label htmlFor="Member2LinkedIn">Member 2 LinkedIn</label>
          <input type="text" id="Member2LinkedIn" name="Member2LinkedIn" placeholder="Enter Member 2 LinkedIn" />
        </div>

        {/* Member 2 Roll Number */}
        <div className="input-container">
          <label htmlFor="Member2RollNumber">Member 2 Roll Number</label>
          <input type="text" id="Member2RollNumber" name="Member2RollNumber" placeholder="Enter Member 2 Roll Number" />
        </div>

        {/* Member 2 Year */}
        <div className="input-container">
          <label htmlFor="Member2Year">Member 2 Year</label>
          <select id="Member2Year" name="Member2Year" placeholder="Select Member 2 Year">
            <option value="">Select Your Year</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
          </select>
        </div>

        {/* Member 2 Stream */}
        <div className="input-container">
          <label htmlFor="Member2Stream">Member 2 Stream</label>
          <select id="Member2Stream" name="Member2Stream" placeholder="Select Member 2 Stream">
            <option value="">Select Your Stream</option>
            <option value="ECE1">ECE1</option>
            <option value="ECE2">ECE2</option>
            <option value="ECE3">ECE3</option>
            <option value="CSE1">CSE1</option>
            <option value="CSE2">CSE2</option>
            <option value="CSE3">CSE3</option>
            <option value="CSBS">CSBS</option>
            <option value="EE">EE</option>
            <option value="EEE">EEE</option>
            <option value="ME">ME</option>
            <option value="MCA">MCA</option>
          </select>
        </div>

        {/* Member 3 Name */}
        <div className="input-container">
          <label htmlFor="Member3Name">Member 3 Name</label>
          <input type="text" id="Member3Name" name="Member3Name" placeholder="Enter Member 3 Name" />
        </div>

        {/* Member 3 Mail Id */}
        <div className="input-container">
          <label htmlFor="Member3MailId">Member 3 Mail Id</label>
          <input type="email" id="Member3MailId" name="Member3MailId" placeholder="Enter Member 3 Mail Id" />
        </div>

        {/* Member 3 GitHub */}
        <div className="input-container">
          <label htmlFor="Member3GitHub">Member 3 GitHub</label>
          <input type="text" id="Member3GitHub" name="Member3GitHub" placeholder="Enter Member 3 GitHub" />
        </div>

        {/* Member 3 LinkedIn */}
        <div className="input-container">
          <label htmlFor="Member3LinkedIn">Member 3 LinkedIn</label>
          <input type="text" id="Member3LinkedIn" name="Member3LinkedIn" placeholder="Enter Member 3 LinkedIn" />
        </div>

        {/* Member 3 Roll Number */}
        <div className="input-container">
          <label htmlFor="Member3RollNumber">Member 3 Roll Number</label>
          <input type="text" id="Member3RollNumber" name="Member3RollNumber" placeholder="Enter Member 3 Roll Number" />
        </div>

        {/* Member 3 Year */}
        <div className="input-container">
          <label htmlFor="Member3Year">Member 3 Year</label>
          <select id="Member3Year" name="Member3Year" placeholder="Select Member 3 Year">
            <option value="">Select Your Year</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
          </select>
        </div>

        {/* Member 3 Stream */}
        <div className="input-container">
          <label htmlFor="Member3Stream">Member 3 Stream</label>
          <select id="Member3Stream" name="Member3Stream" placeholder="Select Member 3 Stream">
            <option value="">Select Your Stream</option>
            <option value="ECE1">ECE1</option>
            <option value="ECE2">ECE2</option>
            <option value="ECE3">ECE3</option>
            <option value="CSE1">CSE1</option>
            <option value="CSE2">CSE2</option>
            <option value="CSE3">CSE3</option>
            <option value="CSBS">CSBS</option>
            <option value="EE">EE</option>
            <option value="EEE">EEE</option>
            <option value="ME">ME</option>
            <option value="MCA">MCA</option>
          </select>
        </div>

        {/* Payment QR */}
        <label htmlFor="ScanThisQRForPayment">Scan This QR For Payment</label>
        <div className="centered-image">
          <img src="./Payment QR.png" alt="Your Image Description" width="200" height="200" />
        </div>

        {/* Transaction id */}
        <div className="input-container">
          <label htmlFor="TransactionId">Transaction id</label>
          <input type="text" id="TransactionId" name="TransactionId" placeholder="Enter transaction id" required />
        </div>

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;