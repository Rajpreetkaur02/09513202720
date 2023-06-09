import './App.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [trains, settrains] = useState([]);
  const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODYzMjQ5OTMsImNvbXBhbnlOYW1lIjoiR1RCSVQgQ2VudHJhbCIsImNsaWVudElEIjoiYTIwNmZiNzktZmU0Yy00NDFhLWEwOGUtMGQ0Y2FlZGUwYTBlIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjA5NTEzMjAyNzIwIn0.l-ShEQ9UsH1Usrbt75obXL_0yTbnAqFvcFresoM3nQ4' }

  useEffect(() => {

    fetch('http://104.211.219.98/train/trains', { headers })
      .then(response => {
        response.json().then(train => {
          settrains(train);
        })
      })
  }, []);
  console.log(trains);
  return (
    <div>
      <h2>Trains</h2>
      {trains.map((item) => (
        <>
        <h2>{item.trainName}</h2>
        <p>{item.trainNumber}</p>
          <p>{item.departureTime.Hours}:{item.departureTime.Minutes}:{item.departureTime.Seconds}</p>
        <p>{item.seatsAvailable.sleeper}:{item.seatsAvailable.AC}</p>
        </>
      ))}
      
    </div>
  );
}


