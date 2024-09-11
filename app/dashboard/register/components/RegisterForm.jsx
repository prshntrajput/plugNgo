import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import axios from 'axios';  // Import axios

export default function RegisterChargingPoint() {
  const { isSignedIn, userId } = useAuth();  // Clerk authentication
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const router = useRouter();

  if (!isSignedIn) {
    return <div>You need to sign in to register a charging point</div>;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // Call API to save the charging point using axios
      const res = await axios.post('/api/register-point', {
        name,
        latitude,
        longitude,
        userId,
      });

      if (res.status === 200) {
        alert('Charging point registered successfully');
        router.push('/');  // Redirect to home or map
      } else {
        alert('Failed to register the charging point');
      }
    } catch (error) {
      console.error('Error registering charging point:', error);
      alert('Failed to register the charging point');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Charging Point Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Latitude</label>
        <input
          type="number"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Longitude</label>
        <input
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register Charging Point</button>
    </form>
  );
}
