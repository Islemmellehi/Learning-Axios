import Delete from "./components/Delete";
import Get from "./components/Get";
import Patch from "./components/Patch";
import Post from "./components/Post";
import Put from "./components/Put";

function App() {
  return (
    <div id="title">
      <h1 >Axios </h1>
      <div>
        <Get />
        <Post/>
        <Put/>
        <Patch />
        <Delete/>
      </div>
    </div>
  );
}

export default App;
