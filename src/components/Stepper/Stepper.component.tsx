import React from "react";
import styles from "./Stepper.module.css";

interface StepProps {
  label: string;
  status: "completed" | "active" | "upcoming";
  icon: React.ReactNode;
}

interface Props {
  steps: StepProps[];
  currentStep: number;
  onBack?: () => void;
  onExit?: () => void;
}

const Stepper: React.FC<Props> = ({ steps, currentStep, onBack, onExit }) => {
  const isFirstStep = currentStep === 0;

  return (
    <div className={styles.stepperContainer}>
      {/* Back/Exit Button */}
      <button 
        className={styles.navButton}
        onClick={isFirstStep ? onExit : onBack}
      >
        ← {isFirstStep ? "Exit" : "Back"}
      </button>

      {/* Steps Container */}
      <div className={styles.stepsWrapper}>
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            {/* Step Circle */}
            <div className={`${styles.stepCircle} ${styles[step.status]}`}>
              {step.icon}
            </div>

            {/* Progress Line (except after last step) */}
            {index < steps.length - 1 && (
              <div className={`${styles.progressLine} ${
                index < currentStep ? styles.progressLineCompleted : styles.progressLineIncomplete
              }`} />
            )}
          </React.Fragment>
        ))}

        {/* Current Step Label */}
        <div className={styles.stepLabel}>
          {steps[currentStep]?.label}
        </div>
      </div>

      {/* Right Action Button (placeholder) */}
      <div className={styles.rightAction}>
        <div className={styles.actionIcon}>
          📋
        </div>
      </div>
    </div>
  );
};

export default Stepper;