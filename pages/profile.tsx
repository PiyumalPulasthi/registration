import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';

const ProfilePage = () => {
  const router = useRouter();
  const [profileData, setProfileData] = useState({ username: '', email: '' });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const session = await getSession();
        if (!session) {
          // If the user is not authenticated, redirect to the login page
          router.push('/login');
        } else {
          // If the user is authenticated, fetch the profile data
          const response = await fetch('/api/profile');
          const data = await response.json();
          setProfileData(data);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {profileData.username}</p>
      <p>Email: {profileData.email}</p>
    </div>
  );
};

export default ProfilePage;