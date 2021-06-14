
import './App.css';
import UsersDataTable from "./components/DataTables/UsersDataTable";
import {state} from "./redux/store";
import {BrowserRouter, Route} from "react-router-dom";
import TableEditForm from "./components/Forms/TableEditForm";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Route exact path="/"><UsersDataTable state={state}/></Route>
              <Route exact path="/editForm"><TableEditForm/></Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
