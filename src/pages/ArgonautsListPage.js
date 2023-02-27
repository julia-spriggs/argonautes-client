import { useState, useEffect } from 'react';
import axios from 'axios';
import AddArgonaut from '../components/AddArgonaut';

const API_URL = 'http://localhost:5005';

function ArgonautsListPage() {
    const [argonauts, setArgonauts] = useState([]);

    const getAllArgonauts = () => {
        // Get token from localStorage
        const storedToken = localStorage.getItem('authToken');

        // Send token through the request "authorization" headers
        axios
            .get(`${API_URL}/api/argonauts`,
            { headers: { Authorization: `Bearer ${storedToken}`} }
            )
            .then((response) => setArgonauts(response.data))
            .catch((error) => console.log(error));

    };

    // Set the effect once, after initial render by setting empty dependency array
    useEffect(() => {
        getAllArgonauts();
    }, [] );

    return (
        <div>
            <h1>Les Argonautes</h1>
            <AddArgonaut refreshArgonauts={getAllArgonauts} />

    

            {}
        </div>
    );
}

export default ArgonautsListPage;