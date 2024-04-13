import { CrudAPI } from "./components/crud/CrudAPI";
import { CrudAPP } from "./components/crud/CrudAPP";
import { Modals } from "./components/modals/Modals";
import { SelectsAnidados } from "./components/selects/SelectsAnidados";
import { SongSearch } from "./components/songsearch/SongSearch";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <CrudAPP />
      <hr />
      <CrudAPI />
      <hr />
      <SongSearch />
      <hr />
      <SelectsAnidados />
      <hr />
      <Modals />
    </>
  );
}

export default App;
