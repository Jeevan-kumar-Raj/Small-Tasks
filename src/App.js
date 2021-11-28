import "./App.css";
// import DeepCompare from "./Assig-No-5/DeepCompare";
import ChildAcom from "./Assig-No-6/ChildAcom";
import ChildBcom from "./Assig-No-6/ChildBcom";
import MoviesContext from "./Assig-No-6/MoviesContext";
// import ClosePupup from "./Assig-No-1/ClosePupup";
// import AxiosInterceptors from "./Assig-No-2&3/AxiosInterceptors";
// import Hoc from "./Assig-No-4/Hoc";

function App() {
  return (
    <div className="App">
      {/* For Close Pup-Up */}
      {/* <ClosePupup /> */}

      {/*For Axios Interceptors  */}
      {/* <AxiosInterceptors /> */}
      {/* For HOC */}

      {/* <Hoc /> */}
      {/* for DeepCompare */}
      {/* <DeepCompare /> */}

      <h1>Context API</h1>
      <MoviesContext>
        <ChildAcom />
        <ChildBcom />
      </MoviesContext>
    </div>
  );
}

export default App;
