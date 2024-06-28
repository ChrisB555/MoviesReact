import { useState } from "react";
import { AddContainer, AddButton } from "./Add.style";
import AddForm from "./AddForm";

const Add = () => {
  const [inputObject, setInputObject] = useState({
    title: "",
    image: "",
    year: 0,
    rating: 0,
    description: "",
    category: "",
  });

  const [error, setError] = useState({
    title: undefined,
    image: undefined,
    year: undefined,
    rating: undefined,
    description: undefined,
    category: undefined,
  });

  const handleChange = (e, name) => {
    setInputObject({ ...inputObject, [name]: e.target.value });
    handleError(e.target.value, name);
  };

  const handleError = (value, name) => {
    switch (name) {
      case "Title":
        if (value.length < 3) {
          setError({
            ...error,
            [name]: "Titlu trebuie sa fie mai lung de 3 caracter",
          });
        } else if (value === "Title") {
          setError({ ...error, [name]: "titlu nepotrivit" });
         
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      default:
        break;
    }
  };

  const handlesubmit = () => {
    console.log(inputObject);
    fetch(`http://localhost:3001/movies`, {
      method: "POST",
      body: JSON.stringify(inputObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

 

  return (
    <AddContainer>
      {Object.keys(inputObject).map(
      
        (el, index) => (
          <AddForm
            key={index}
            name={el}
            type={el === "year" || el === "rating" ? "number" : "text"}
            value={inputObject[el]}
            handleChange={handleChange}
            error={error[el]}
          />
        )
      )}
    
      <AddButton onClick={() => handlesubmit()}> Submit</AddButton>
    </AddContainer>
  );
};

export default Add;