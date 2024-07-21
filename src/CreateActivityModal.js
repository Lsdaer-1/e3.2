import React, { useState } from 'react';
import Modal from 'react-modal';
import './CreateActivityModal.css';

Modal.setAppElement('#root');

function CreateActivityModal({ isOpen, onRequestClose }) {
  const [activity, setActivity] = useState({
    name: '',
    date: '',
    time: '',
    place: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Activity Created:', activity);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create Activity Modal"
      className="create-activity-modal"
      overlayClassName="create-activity-overlay"
    >
      <h2>Create Activity</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Activity Name:
          <input type="text" name="name" value={activity.name} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={activity.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={activity.time} onChange={handleChange} required />
        </label>
        <label>
          Place:
          <input type="text" name="place" value={activity.place} onChange={handleChange} required />
        </label>
        <button type="submit">Create</button>
        <button type="button" onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
}

export default CreateActivityModal;
