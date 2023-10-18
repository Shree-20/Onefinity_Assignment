import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import './VoiceForm.css';


const VoiceForm = () => {
  const [formData] = useState({
    firstName: '',
    lastName: '',
    state: '',
    district: '',
    village: '',
    panNumber: '',
    aadhaarNumber: '',
    transcribedText: '',
  });

  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const startRecording = () => {
   
    toggleRecording();
  };

  const stopRecording = () => {
    
    toggleRecording();
  };

  const handleFormSubmit = () => {
    
  };

  return (
    <div>
      <h1>Speech to Text Form</h1>
      <form>
        <div className="form-field">
          <label>First Name:</label>
          <div className="input-with-mic">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="Enter First Name"
            />
            <button onClick={isRecording ? stopRecording : startRecording}>
              <FontAwesomeIcon
                icon={isRecording ? faMicrophoneSlash : faMicrophone}
              />
            </button>
          </div>
        </div>
        <div className="form-field">
          <label>Last Name:</label>
          <div className="input-with-mic">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Enter Last Name"
            />
            <button onClick={isRecording ? stopRecording : startRecording}>
              <FontAwesomeIcon
                icon={isRecording ? faMicrophoneSlash : faMicrophone}
              />
            </button>
          </div>
        </div>
        <div className="form-field">
          <label>State:</label>
          <div className="input-with-mic">
            <input
              type="text"
              name="state"
              value={formData.state}
              placeholder="Enter State"
            />
            <button onClick={isRecording ? stopRecording : startRecording}>
              <FontAwesomeIcon
                icon={isRecording ? faMicrophoneSlash : faMicrophone}
              />
            </button>
          </div>
        </div>
        <div className="form-field">
          <label>District:</label>
          <div className="input-with-mic">
            <input
              type="text"
              name="district"
              value={formData.district}
              placeholder="Enter District"
            />
            <button onClick={isRecording ? stopRecording : startRecording}>
              <FontAwesomeIcon
                icon={isRecording ? faMicrophoneSlash : faMicrophone}
              />
            </button>
          </div>
        </div>
        <div className="form-field">
          <label>Village:</label>
          <div className="input-with-mic">
            <input
              type="text"
              name="village"
              value={formData.village}
              placeholder="Enter Village"
            />
            <button onClick={isRecording ? stopRecording : startRecording}>
              <FontAwesomeIcon
                icon={isRecording ? faMicrophoneSlash : faMicrophone}
              />
            </button>
          </div>
        </div>
        <div className="form-field">
          <label>PAN Number:</label>
          <div className="input-with-mic">
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              placeholder="Enter PAN Number"
            />
            <button onClick={isRecording ? stopRecording : startRecording}>
              <FontAwesomeIcon
                icon={isRecording ? faMicrophoneSlash : faMicrophone}
              />
            </button>
          </div>
        </div>
        <div className="form-field">
          <label>Aadhaar Number:</label>
          <div className="input-with-mic">
            <input
              type="text"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              placeholder="Enter Aadhaar Number"
            />
            <button onClick={isRecording ? stopRecording : startRecording}>
              <FontAwesomeIcon
                icon={isRecording ? faMicrophoneSlash : faMicrophone}
              />
            </button>
          </div>
        </div>

        <div className="submit-button">
          <button onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default VoiceForm;
