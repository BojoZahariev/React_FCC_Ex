const Button = props => {
  return <button onClick={props.onClickHandler}>{props.text}</button>;
};

const LoginButton = props => {
  return <Button text="Login" onClickHandler={props.onClickHandler} />;
};

const Container = () => {
  const onClickHandler = () => {
    alert('clicked');
  };

  return <LoginButton onClickHandler={onClickHandler} />;
};

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);

/*
class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    return (
      <div>
        <h1>Click Me</h1>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Title />, domContainer);
*/
