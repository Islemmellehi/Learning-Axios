import axios from "axios";
import Modal from "react-modal";
import { useState } from "react";



function Post() {
  const [x,setX]= useState(null);
  const [modalisOpen, setModalIsOpen] = useState(false);
  const[loading,setLoading] = useState(false);

  
  function closeModelHandler() {
    setModalIsOpen(false);
  }

  //post request
  function post_shit() {
    setLoading(true)
    axios
      .post("https://jsonplaceholder.typicode.com/users",{
        name : window.prompt("enter name"),
        city : window.prompt("enter city")
      })
      .then((res) => Showshit(res));
    function Showshit(res) {
      //variable containing output
      setX(JSON.stringify(res.data, null, 2))
      setModalIsOpen(true);
      setLoading(false)
    }
    

  }

  return (
    <div>
      <div>
        {loading ? <p id ="loading">Loading..</p> :<button onClick={post_shit} id="post">Post Data</button>}
        <p id="response"></p>
      </div>
      <div id="dumbfuckmodal">
        <Modal id="modal" isOpen={modalisOpen} >
          <h1>Data</h1>
          <p id="modalresponse">{x} </p>
          <button id="close" onClick={closeModelHandler}>Close</button>
        </Modal>
      </div>
    </div>
  );
}

export default Post;