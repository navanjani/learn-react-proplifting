import { useState } from "react";

const AddPokemon = ({ addPokemon }) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    addPokemon(name);
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" value={""}>
          {" "}
          Pokemon Name :
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddPokemon;
