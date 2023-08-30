import React, { useState } from "react";
import {Multiselect} from 'multiselect-react-dropdown';
import './sentmessage.css'
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
    
        <div id="main-sentmp">
          <section id="sentmp">
            <form action="">
              <p id="sentmp-content">Sent Message/Project</p>
              <label htmlFor="name">Enter Project Name</label>
              <br />
              <input type="text" id="name" />
              <br />
              <label htmlFor="desc">Enter Description</label>
              <br />
              <textarea name="desc" id="desc" cols="52" rows="5"></textarea>
              <br />
              <label htmlFor="file">Attach Project File</label>
              <br />
              <input type="file" name="file" id="file" />
              <br />
              <label htmlFor="pm">Select Project Manager</label><br />
              <Multiselect id="pm" options={options} displayValue='name' onSelect={store} onRemove={store} />
              <label htmlFor="sd">Select Senior Developer</label>
              <Multiselect  id="sd" options={options} displayValue='name' onSelect={store} onRemove={store} />
              <label htmlFor="jd">Select Junior Developer</label><br />
              <Multiselect id="jd" options={options} displayValue='name' onSelect={store} onRemove={store} />
              <label htmlFor="fd">Freshers Developer</label><br />
              <Multiselect id="fd" options={options} displayValue='name' onSelect={store} onRemove={store} />

              <label htmlFor="ste">Select Senior Test Engineer</label>
              <Multiselect  id="ste" options={options} displayValue='name' onSelect={store} onRemove={store} />
              <label htmlFor="jte">Select Junior Test Engineer </label><br />
              <Multiselect id="jte" options={options} displayValue='name' onSelect={store} onRemove={store} />
              <label htmlFor="fte">Freshers Test Engineer</label><br />
              <Multiselect id="fte" options={options} displayValue='name' onSelect={store} onRemove={store} />
              
              <button id='sentmp-button'>Sent</button>
            </form>
          </section>
        </div>
     
  );
};

export default SentMessaageProject;
