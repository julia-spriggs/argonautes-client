import { useState } from "react";
import axios from "axios";

function AddArgonaut(props) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name: name };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/`, requestBody, {
      })
      .then((response) => {
        // Reset the state
        setName("");
        props.refreshArgonauts();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="add">
      <h2>Ajouter un(e) Argonaute</h2>

      <form onSubmit={handleSubmit}>
        <label className="form">Nom de l'argonaute:</label>
        <input
          className="form"
          type="text"
          name="name"
          placeholder="Charalampos"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="form" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default AddArgonaut;
