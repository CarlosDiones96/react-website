import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Erro HTTP: status do erro é ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="welcome-text">Usando Fetch com JSON Placeholder</h1>
      {loading && <div className="loading">Aguarde um instante... </div>}
      {error && (
        <div>{`Houve um problema na requisicao dos dados - ${error}`}</div>
      )}
      <ul className="content">
        {data && data.map(({ id, title }) => (
          <li key={id}>
            <h3 className="title">{title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ==============================================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
