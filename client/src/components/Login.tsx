import React, { useState } from 'react';

interface Props {
  onLogin: (name: string) => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // Hardcoded user (practice)
  const correctUser = {
    name: 'megh',
    password: '1234',
  };

  const handleLogin = () => {
    if (name === correctUser.name && password === correctUser.password) {
      alert('Login successful!');
      onLogin(name);
    } else {
      alert('Incorrect name or password!');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          className="border p-2 rounded w-full mb-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 rounded w-full mb-4"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-6"
        >
          Login
        </button>
        
        {/* Credentials hint */}
        <div className="text-xs text-gray-500 border-t pt-4">
          <p><strong>Demo credentials:</strong></p>
          <p>Name: <span className="font-mono bg-gray-100 px-1 rounded">megh</span></p>
          <p>Password: <span className="font-mono bg-gray-100 px-1 rounded">1234</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
