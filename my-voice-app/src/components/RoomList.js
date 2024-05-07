import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RoomList from './RoomList'; // Assuming you have the RoomList component

function Dashboard() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:8080/rooms'); // Fetch rooms from backend
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <RoomList rooms={rooms} />
    </div>
  );
}

export default Dashboard;
