import axios from "axios";
import Modal from "react-modal";
import { useState } from "react";



function Patch() {
  const [x,setX]= useState(null);
  const [modalisOpen, setModalIsOpen] = useState(false);
  const[loading,setLoading] = useState(false);

  
  function closeModelHandler() {
    setModalIsOpen(false);
  }

  //post request
  function patch() {
    setLoading(true)
    axios
      .patch("https://jsonplaceholder.typicode.com/users/2",{
        name : window.prompt("enter name"),
        city : window.prompt("enter city")
      })
      .then((res) => Show(res));
    function Show(res) {
      //variable containing output
      setX(JSON.stringify(res.data, null, 2))
      setModalIsOpen(true);
      setLoading(false)
    }
    

  }

  return (
    <div>
      <div>
        {loading ? <p id ="loading">Loading..</p> :<button onClick={patch} id="patch">Patch Data</button>}
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

export default Patch;