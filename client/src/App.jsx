import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState(''); // Initialize the state with an empty string

  useEffect(() => {
    fetch("https://mern-deploy-backend-7noa.onrender.com")
      .then(res => res.json())
      .then(data => setMessage(data.message)); // Update state with the message from the backend
  }, []); // Add empty dependency array to run only once on mount

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
