// import { Provider } from "react-redux";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Search from "./components/Search";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Search />
      </Provider>
    </>
  );
}

export default App;
