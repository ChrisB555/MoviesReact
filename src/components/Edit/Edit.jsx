import { useState, useEffect } from "react";
import { AddContainer, AddButton } from "./Edit.style";
import EditForm from "./EditForm";
import { useParams } from "react-router-dom";
import useFetchMovies from "../../hooks/useFetchMovie";

const Edit = () => {
  const { id } = useParams(); 
  const {
    movies: movie,
    error: errorGetData,
    loading,
  } = useFetchMovies("/" + id);

  const [inputObject, setInputObject] = useState(null);

  const [error, setError] = useState({
    title: undefined,
    img: undefined,
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
    fetch(`http://localhost:3001/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(inputObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    if (movie) setInputObject(movie);
  }, [movie]);

 

  return (
    <AddContainer>
      {inputObject &&

        Object.keys(inputObject).map((el, index) => (
          <EditForm
            key={index}
            name={el}
            type={el === "year" || el === "rating" ? "number" : "text"}
            value={inputObject[el]}
            handleChange={handleChange}
            error={error[el]}
          />
        ))}
      {loading && <div>Loading...</div>}
  
      {!errorGetData && (
        <AddButton onClick={() => handlesubmit()}> Submit</AddButton>
      )}
      {errorGetData && <p>{errorGetData}</p>}
    </AddContainer>
  );
};

export default Edit;