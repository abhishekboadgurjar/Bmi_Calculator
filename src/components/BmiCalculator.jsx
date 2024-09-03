import  { useState } from "react";
import logoImg from "../assets/images/BMI Logo.png";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [result, setResult] = useState("");

  function calculateBMI(weight, height) {
    const heightM = height / 100;
    const bmiResult = weight / (heightM * heightM);
    setBMI(bmiResult.toFixed(2)); // Round to 2 decimal places
    if (bmiResult < 18.5) {
      setResult("Underweight");
    } else if (bmiResult < 24.9) {
      setResult("Normal weight");
    } else if (bmiResult < 29.9) {
      setResult("Overweight");
    } else {
      setResult("Obesity");
    }
  }

  const handleCalculateBMI = () => {
    if (weight && height) {
      calculateBMI(weight, height);
    }
  };

  return (
    <div className="bmi-container">
      <div className="logo">
        <img src={logoImg} alt="BMI Logo" />
      </div>
      <div className="input-box">
        <div className="weight-input">
          <h4>Weight (kg)</h4>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="height-input">
          <h4>Height (cm)</h4>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleCalculateBMI} className="btn">
        <h2>Calculate BMI</h2>
      </button>
      
      <div className="output-box">
        <p>
          Your BMI : <b>{bmi}</b>
        </p>
        <p>
          Result : <b>{result}</b>
        </p>
      </div>
    </div>
  );
};

export default BmiCalculator;
