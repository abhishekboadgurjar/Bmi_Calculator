
import BmiCalculator from "./components/BmiCalculator";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>BMI Calculator</h1>
      </div>
      <BmiCalculator />
      <div className="footer">
        <p>Made with ❤️ by Abhishek Gurjar</p>
      </div>
    </div>
  );
};

export default App;
