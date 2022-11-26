const Button = (props) => {
  //  Write your code here.
  const { text, cls } = props;
  return <button className={`cls`}>{text}</button>;
};

const element = (
  //  Write your code here
  <div className="bgContainer">
    <div>
      <h1 className="heading">Social Buttons</h1>
      <div className="buttonContainer">
        <Button text="Like" cls="btn btn1"></Button>
        <Button text="Share" cls="btn btn2"></Button>
        <Button text="Comment" cls="btn btn3"></Button>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
