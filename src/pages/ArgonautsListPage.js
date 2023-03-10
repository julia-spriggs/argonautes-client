import { useState, useEffect } from "react";
import axios from "axios";
import AddArgonaut from "../components/AddArgonaut";
import ArgonautDetails from "../components/ArgonautDetails";

function ArgonautsListPage() {
  const [argonauts, setArgonauts] = useState([]);

  const getAllArgonauts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/`)
      .then((response) => setArgonauts(response.data))
      .catch((error) => console.log(error));
  };

  // Set the effect once, after initial render by setting empty dependency array
  useEffect(() => {
    getAllArgonauts();
  }, []);

  return (
    <div className="list">
      <h1>Les Argonautes</h1>
      <AddArgonaut refreshArgonauts={getAllArgonauts} />
      <h2>Noms des Argonautes</h2>
      <ul>
        {argonauts.map((argonaut) => (
          <li>
            <ArgonautDetails {...argonaut} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArgonautsListPage;
