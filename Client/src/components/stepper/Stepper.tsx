import { Button, Stack } from "@chakra-ui/react";
import "./stepper.css";
import { useState } from "react";
import { TiTick } from "react-icons/ti";

const Stepper = () => {
  const steps = ["Reservation", "Confirmation", "Complete"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleNextStep = () => {
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <Stack justifyContent="space-between" direction="row">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`step-item 
            ${currentStep === i + 1 && "active"}
            ${(i + 1 < currentStep || complete) && "complete"}
          `}
        >
          <div className="step">{i + 1}</div>
          <p className="gray-500">
            {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
          </p>
        </div>
      ))}
      {!complete && (
        <Button onClick={handleNextStep}>
          {currentStep === steps.length ? "Finish" : "Next"}
        </Button>
      )}
    </Stack>
  );
};

export default Stepper;
