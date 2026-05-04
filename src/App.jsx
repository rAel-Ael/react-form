import { useState } from "react";
import "./index.css";

function App() {
  const [articoli, setArticoli] = useState([
    { id: 1, title: "Articolo 1", content: "Contenuto 1" },
    { id: 2, title: "Articolo 2", content: "Contenuto 2" },
    { id: 3, title: "Articolo 3", content: "Contenuto 3" },
    { id: 4, title: "Articolo 4", content: "Contenuto 4" }
  ])
  const submitHandler = (event) => {
    console.log('submit');
  }
  return (
    <>
    <div>
      {articoli.map((articolo) => (
        <div className="card mb-3" style={{ width: "18rem" }} key={articolo.id}>
          <div className="card-body">
            <h5 className="card-title">{articolo.title}</h5>
            <p className="card-text">{articolo.content}</p>
          </div>
          <div class="card-body">
            <a href="#" class="card-link">Articolo link</a>
          </div>
        </div>
      ))}
</div>

    <h2>Iserisci qui sotto i dati del nuovo articolo</h2>

    <form onSubmit={submitHandler}>
      <input value={articoli.title} className="form-control" type="text" placeholder="inserisci titolo" aria-label="default input example"></input>

      <textarea value={articoli.content} name="content" id="contenuto"> </textarea>
      
      <button type="submit" className="btn btn-secondary">INVIA</button>
    </form>
  </> 
  );

  




}
export default App;