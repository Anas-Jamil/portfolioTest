import TestButton from "./components/TestButton";

const App = () => {
  return (
    <div className="text-3xl font-bold underline text-blue-400">
      <TestButton/>
      Hello <span className="text-2xl text-black">Bye</span> There
    </div>
  );
};

export default App;
