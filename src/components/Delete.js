import axios from "axios";
import Modal from "react-modal";
import { useState } from "react";



function Delete() {
  const [x,setX]= useState(null);
  const [modalisOpen, setModalIsOpen] = useState(false);
  const[loading,setLoading] = useState(false);

  
  function closeModelHandler() {
    setModalIsOpen(false);
  }

  //post request
  function delete_shit() {
    setLoading(true)
    axios
      .delete("https://jsonplaceholder.typicode.com/users?_limit=2")
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
        {loading ? <p id ="loading">Loading..</p> :<button onClick={delete_shit} id="delete">Delete Data</button>}
        <p id="response"></p>
      </div>
      <div id="dumbfuckmodal">
        <Modal id="modal" isOpen={modalisOpen} >
          <h1>Data</h1>
          <p id="modalresponse">{x} </p>
          <button id="close" onClick={closeModelHandler}>Close </button>
        </Modal>
      </div>
    </div>
  );
}

export default Delete;