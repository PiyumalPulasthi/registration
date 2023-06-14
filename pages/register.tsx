import { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("CAME TO REGISTER", e)
    e.preventDefault();

    // Perform registration logic
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (response.ok) {
        // Registration successful, handle accordingly
        console.log('Registration successful');
      } else {
        // Registration failed, handle accordingly
        const data = await response.json();
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;