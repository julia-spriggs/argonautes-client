import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddArgonaut(props) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name: name };

    axios
      .post(`${API_URL}/api/argonauts`, requestBody, {
      })
      .then((response) => {
        // Reset the state
        setName("");
        props.refreshArgonauts();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Ajouter un(e) Argonaute</h2>

      <form onSubmit={handleSubmit}>
        <label>Nom de l'argonaute:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default AddArgonaut;
