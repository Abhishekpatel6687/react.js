import "./App.css";
import { Provider } from "react-redux";
import store from "./reduxContainer/Store";
import BookContainer from "./reduxContainer/BookContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
      <BookContainer/>
        <h1>Abhishek</h1>
      </div>
    </Provider>
  );
}

export default App;
