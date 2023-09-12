import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const { setUser } = useContext(UserContext);

  const handleSubmit = () => {
    // Initialize error object
    const newErrors = { username: '', password: '' };

    // Validate username
    if (!username.trim()) {
      newErrors.username = 'Username is required.';
    }

    // Validate password
    if (!password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 3) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    // Check if there are any errors
    if (newErrors.username || newErrors.password) {
      setErrors(newErrors);
    } else {
      // Clear any previous errors
      setErrors({ username: '', password: '' });

      // If validation passes, set the user and perform other actions
      setUser({ username, password });
      console.log('handleSubmit');
    }
  };

  return (
    <center>
      <div className="container ">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`border ${errors.username && 'border-red-500'}`}
          placeholder="User Name"
        />
        {errors.username && (
          <p className="text-red-500">{errors.username}</p>
        )}

        <br /><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`border ${errors.password && 'border-red-500'}`}

          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password}</p>
        )}
        <br /><br />
        <button onClick={handleSubmit} className="border"> Sign in</button>

      </div>
    </center>

  );
}

export default Login;
