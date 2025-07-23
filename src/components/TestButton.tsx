
function onClickFunction() {
  alert("Hello There")
}

const TestButton = () => {
  return (
    <button onClick={onClickFunction}>Click Me</button>
  );
};

export default TestButton;
