import { useState } from "react";
import Button from "./components/buttons";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep((s) => s + 1);
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <div className="message">
            Step {step}: {messages[step - 1]}
          </div>

          <div className="buttons">
            <Button 
              bgColor={"#7950f2"}
              color={"#fff"}
              onClick={handlePrevious}
              
              
            ><span>{"👈"}</span>Previous</Button>
            <Button 
              bgColor={"#7950f2"}
              color={"#fff"}
              onClick={handleNext}
        
            ><span>{"👉"}</span>Next</Button>
            {/* <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
