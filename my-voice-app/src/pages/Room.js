// pages/Room.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Room() {
  const [room, setRoom] = useState(null);
  const roomId = 'your_room_id_here'; // Replace 'your_room_id_here' with the actual room ID

  useEffect(() => {
    // Fetch room data from the backend API
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`/api/rooms/${roomId}`); // Assuming you have an API endpoint to fetch room details
        setRoom(response.data);
      } catch (error) {
        console.error('Error fetching room:', error);
      }
    };

    fetchRoom();
  }, [roomId]);

  return (
    <div>
      <h1>Room Details</h1>
      {room ? (
        <div>
          <h2>{room.name}</h2>
          <p>Room ID: {room._id}</p>
          <p>Created At: {room.createdAt}</p>
          {/* Additional room details can be displayed here */}
        </div>
      ) : (
        <p>Loading room details...</p>
      )}
    </div>
  );
}

export default Room;
