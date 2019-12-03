//React: Create a Complex JSX ElementPassed

const JSX = (
  <div>
    <h1></h1>
    <p></p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
);

/////////////////////////
//Add Comments in JSXPassed

const JSX = (
  <div>
    {/*comment*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

////////////////////////////////
//Render HTML Elements to the DOMPassed
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));

///////////////////////////
//Define an HTML Class in JSX
const JSX = (
  <div className="myDiv">
    <h1 className="something">Add a class to this div</h1>
  </div>
);

//////////////////////////////////
//Create a Stateless Functional Component
const MyComponent = function() {
  // change code below this line

  return <div>Hello</div>;

  // change code above this line
};
