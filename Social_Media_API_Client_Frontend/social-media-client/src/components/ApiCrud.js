import React, { useEffect, useState } from 'react';
import { getItems, createItem, updateItem, deleteItem } from '../services/api';
import { useNavigate } from 'react-router-dom';

const ApiCrud = () => {
  const [items, setItems] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch items on mount
  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data.slice(0, 10)); // limit to 10 items for demo
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to fetch items. Please try again.');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCreate = async () => {
    if (!newTitle) return;
    try {
      const response = await createItem({ title: newTitle });
      setItems([response.data, ...items]);
      setNewTitle('');
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to create item.');
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await updateItem(id, { title: 'Updated Title' });
      setItems(items.map(item => item.id === id ? response.data : item));
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to update item.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item.id !== id));
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to delete item.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <h2 style={{ marginBottom: '20px' }}>API CRUD Operations</h2>

      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

      {/* Create Item */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="New Item Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
        <button
          onClick={handleCreate}
          style={{
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            marginLeft: '10px',
            cursor: 'pointer'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#1976D2'}
          onMouseOut={e => e.target.style.backgroundColor = '#2196F3'}
        >
          Create
        </button>
      </div>

      {/* List Items */}
      <ul style={{ listStyle: 'none', padding: 0, width: '100%', maxWidth: '600px' }}>
        {items.map(item => (
          <li key={item.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#fff',
            padding: '10px 15px',
            marginBottom: '10px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <span>{item.title}</span>
            <div>
              <button
                onClick={() => handleUpdate(item.id)}
                style={{
                  backgroundColor: '#FF9800',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  marginRight: '8px'
                }}
                onMouseOver={e => e.target.style.backgroundColor = '#F57C00'}
                onMouseOut={e => e.target.style.backgroundColor = '#FF9800'}
              >
                Update
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onMouseOver={e => e.target.style.backgroundColor = '#d32f2f'}
                onMouseOut={e => e.target.style.backgroundColor = '#f44336'}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate('/dashboard')}
        style={{
          marginTop: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        onMouseOver={e => e.target.style.backgroundColor = '#45a049'}
        onMouseOut={e => e.target.style.backgroundColor = '#4CAF50'}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default ApiCrud;
