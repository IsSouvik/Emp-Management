import React, { useState } from "react";
import {Multiselect} from 'multiselect-react-dropdown';
const SentMessaageProject = () => {
  const data=[{name:'souvik'},
{name:'akash'},{name:'ram'}]
let[options]=useState(data)
let[dataa,setDataa]=useState({})
let store=(e)=>{
  setDataa(e)
  console.log(dataa);
}

  return (
    <div>
      <div>
        <div id="main-addemp">
          <section id="addemp">
            <form action="">
              <p id="addemp-content">Sent Message/Project</p>
              <label htmlFor="name">Enter Project Name</label>
              <br />
              <input type="text" id="name" />
              <br />
              <label htmlFor="desc">Enter Description</label>
              <br />
              <textarea name="desc" id="desc" cols="52" rows="5"></textarea>
              <br />
              <Multiselect options={options} displayValue='name' onSelect={store} onRemove={store}/>

              {/* <button id='addemp-button'>ADD</button> */}
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SentMessaageProject;
