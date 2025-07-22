import React from "react";
import styles from "./MobileStepper.module.css";
import { isDark } from "../../constants/data";

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

const MobileStepper: React.FC<Props> = ({ steps, currentStep, onBack, onExit }) => {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
  
  const currentStepData = steps[currentStep];
  const nextStepData = !isLastStep ? steps[currentStep + 1] : null;

  // Get completed steps (all steps before current)
  const completedSteps = steps.slice(0, currentStep);

  return (
    <div className={`${styles.mobileStepperContainer} ${isDark ? styles.dark : styles.light}`}>
      {/* Back/Exit Button */}
      <button 
        className={`${styles.navButton} ${isDark ? styles.navButtonDark : styles.navButtonLight}`}
        onClick={isFirstStep ? onExit : onBack}
      >
        ← {isFirstStep ? "Exit" : "Back"}
      </button>

      {/* Steps Display */}
      <div className={styles.stepsDisplay}>
        {/* Completed Steps */}
        {completedSteps.map((step, index) => (
          <div key={`completed-${index}`} className={`${styles.stepCircle} ${styles.completed}`}>
            {step.icon}
          </div>
        ))}

        {/* Current Step */}
        <div className={`${styles.stepCircle} ${styles.active}`}>
          {currentStepData.icon}
        </div>

        {/* Current Step Label */}
        <span className={`${styles.stepLabel} ${isDark ? styles.stepLabelDark : styles.stepLabelLight}`}>
          {currentStepData.label}
        </span>

        {/* Progress Line to Next Step (if not last step) */}
        {!isLastStep && (
          <div className={styles.progressLine} />
        )}

        {/* Next Step (if exists) */}
        {nextStepData && (
          <div className={`${styles.stepCircle} ${styles.upcoming}`}>
            {nextStepData.icon}
          </div>
        )}
      </div>

      {/* Right Action Icon */}
      <div className={`${styles.rightAction} ${isDark ? styles.rightActionDark : styles.rightActionLight}`}>
        <div className={styles.actionIcon}>
          📋
        </div>
      </div>
    </div>
  );
};

export default MobileStepper;