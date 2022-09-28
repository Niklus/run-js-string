/**
 * 4 Ways of running JS code strings
 **/

/**1 eval */
const codeStr1 = `
  function greet1 () {
    console.log("Hello from eval");
  }
`;

eval(codeStr1);

greet1(); // eval works but its not good, considered dangerous and slow

/*********************************************************************/

/**2 new Function */
const codeStr2 = `
  window.greet2 = function () {
    console.log("Hello from new Function");
  }
`;

new Function(codeStr2)();

greet2(); // new Function only works when you attach function to window: better & faster than eval

/*********************************************************************/

/** 3 Script injection */
const codeStr3 = `
  function greet3 () {
    console.log("Hello from injected script1");
  }
`;

const script1 = document.createElement("script");
script1.textContent = codeStr3;
document.body.appendChild(script1);

greet3(); // Safe and fast option

/*********************************************************************/

/**4 Alternative script injection using base64 encoding*/
const codeStr4 = `
  function greet4 () {
    console.log("Hello from injected script2 with base64 encoding");
  }
`;

const script2 = document.createElement("script");
script2.src = "data:text/plain;base64," + btoa(codeStr4);
document.body.appendChild(script2);

script2.addEventListener("load", () => {
  greet4(); // It is async - you have to wait for it to load.
});

/*********************************************************************/

console.log("--Waiting for injected script2 to load---");

/**
 * Pick number 3 unless you have a better use case!
 */
