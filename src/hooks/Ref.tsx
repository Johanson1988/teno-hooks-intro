import React, { useRef } from "react";

const Ref = () => {
 // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
 const inputEl = useRef<HTMLInputElement>(null);
 const onButtonClick = () => {

   if(inputEl && inputEl.current) {
     inputEl.current.focus();
   } 
 };
 return (
   <>
     { /* in addition, inputEl only can be used with input elements. Yay! */ }
     <input ref={inputEl} type="text" />
     <button onClick={onButtonClick}>Focus the input</button>
   </>
 );
}

export default Ref;