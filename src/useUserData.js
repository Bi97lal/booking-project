// useUserData.js
import { useQuery } from 'react-query';

async function fetchUserData() {
  const response = await fetch('http://127.0.0.1:8000/booking/get_courses/'); // Replace with your API endpoint
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function useUserData() {
  return useQuery('userData', fetchUserData);
}
