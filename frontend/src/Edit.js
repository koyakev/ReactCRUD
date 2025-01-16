import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [newName, setNewName] = useState();
    const [newEmail, setNewEmail] = useState();

    useEffect(() => {
        const fetch = async() => {
            try {
                let response = await axios.get('http://localhost:80/RPM/Backend/fetch.php', { id });
                setNewName(response.data[0].name);
                setNewEmail(response.data[0].email);
            } catch (error) {
                console.error('Error: ', error);
            }
        };
        fetch();
    }, []);

    const editUser = async(e) => {
        e.preventDefault();
        try {
            let response = await axios.put('http://localhost:80/RPM/Backend/edit.php', { id, newName, newEmail });
            navigate('/');
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    return (
        <>
            <Link to='/'>Back to Dashboard</Link>
            <p>Hello</p>
            <p>{id}</p>

            <form onSubmit={editUser}>
                <input
                    type='text'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <input
                    type='email'
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                <button>Edit User</button>
            </form>
        </>
    )
}