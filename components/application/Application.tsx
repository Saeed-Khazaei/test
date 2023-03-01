import Image from "next/image";
import React from "react";

const Application = () => {
  return (
    <div>
      <h1>Job form</h1>
      <h2>Section 1</h2>
      <p>Lorem ipsum</p>
      <span title="close">X</span>
      <div data-testid="custom-element">Cutom HTML element</div>
      <div>
        <label htmlFor="a">A Input</label>
        <input type="text" name="a" id="a" value="saeed" onChange={() => {}} />
      </div>
      <Image fill src="https://via.placeholder.com/150" alt="image-container" />
      <div>
        <label htmlFor="b">B</label>
        <input type="text" name="b" id="b" placeholder="Fullname" />
      </div>
      <label>
        <input type="checkbox" name="check" id="check" />a checkbox
      </label>
      <button>Signup</button>
    </div>
  );
};

export default Application;
