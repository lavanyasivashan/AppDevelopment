import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BillingStatus.css';

export default function BillingStatus() {
  const [data, setData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/auth/billingstatus');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // Check if the user is an admin (you can adjust this based on your authentication logic)
  const isAdmin = true; // Replace with your logic to determine if the user is an admin

  // Redirect to the login page if the user is not an admin
  useEffect(() => {
    if (!isAdmin) {
      nav('/'); // Replace with the actual login page route
    }
  }, [isAdmin, nav]);

  return (
    <div>
      <div className="billingstatus">
        <div className="containers">
          <h2>Billing Status</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.userRegId}>
                  <td>{item.userRegId}</td>
                  <td>{item.username}</td>
                  <td>{item.mobileno}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
