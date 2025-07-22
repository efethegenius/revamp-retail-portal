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
    <div className={`${styles.container} ${isDark ? styles.dark : styles.light}`}>
      {/* Back/Exit Button */}
      <button 
        className={`${styles.navButton} ${isDark ? styles.navButtonDark : styles.navButtonLight}`}
        onClick={isFirstStep ? onExit : onBack}
      >
        ← {isFirstStep ? "Exit" : "Back"}
      </button>

      {/* Center Section - Completed Steps + Current Step */}
      <div className={styles.centerSection}>
        {/* Completed Steps */}
        {completedSteps.map((step, index) => (
          <div key={`completed-${index}`} className={`${styles.stepIcon} ${styles.completed}`}>
            {step.icon}
          </div>
        ))}

        {/* Current Step */}
        <div className={`${styles.stepIcon} ${styles.active}`}>
          {currentStepData.icon}
        </div>

        {/* Current Step Label */}
        <span className={`${styles.stepLabel} ${isDark ? styles.stepLabelDark : styles.stepLabelLight}`}>
          {currentStepData.label}
        </span>

        {/* Progress Line to Next Step (if exists) */}
        {nextStepData && (
          <div className={styles.progressLine} />
        )}
      </div>

      {/* Right Section - Next Step Icon */}
      <div className={styles.rightSection}>
        {nextStepData ? (
          <div className={`${styles.stepIcon} ${styles.upcoming}`}>
            {nextStepData.icon}
          </div>
        ) : (
          <div className={styles.placeholder} />
        )}
      </div>
    </div>
  );
};

export default MobileStepper;