import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch();
  }, []);
  
  const fetch = async() => {
    try {
        let response = await axios.get('http://localhost:80/RPM/Backend/fetch.php');
        setUsers(response.data);
    } catch (error) {
        console.error('Error: ', error);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!name || !email) {
      console.log('Fields are empty');
    } else {
      try {
        let response = await axios.post('http://localhost:80/RPM/Backend/create.php', { name, email });
        console.log(response);
  
        setName('');
        setEmail('');
  
        fetch();
        
      } catch (error) {
        console.error('Error: ', error);
      }
    }

  };

  const deleteUser = async(id) => {
    try {
      let response = await axios.delete('http://localhost:80/RPM/Backend/delete.php', { data: { id } });
      console.log(response);
      fetch();
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  return (
    <div>
      <h1>React Crud</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          required
        />
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          required
        />
        <button type='submit'>Add</button>
      </form>

      <table
        border={1}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>  
          {users && (
            <>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                  <td>
                    <Link to={`edit/${user.id}`}><button>Edit</button></Link>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
