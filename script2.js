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

//////////////////////////////////////
//Create a React ComponentPassed
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line

    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );

    // change code above this line
  }
}

/////////////////////////
//Create a Component with Composition

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        {/* change code below this line */}

        <ChildComponent />
        {/* change code above this line */}
      </div>
    );
  }
}

///////////////////////
//Use React to Render Nested Components
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      {/* change code below this line */}
      <TypesOfFruit />
      {/* change code above this line */}
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits />
        {/* change code above this line */}
      </div>
    );
  }
}

////////////////////////////
//Compose React Components
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* change code below this line */}
        <NonCitrus />
        <Citrus />
        {/* change code above this line */}
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits />
        {/* change code above this line */}
        <Vegetables />
      </div>
    );
  }
}
