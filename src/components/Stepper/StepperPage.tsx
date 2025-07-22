import styles from "./Stepper.module.css";
import Stepper from "./Stepper.component";
import BoxIcon from "../../assets/Icons/bag-icon.svg";
import QuoteIcon from "../../assets/Icons/calculator-icon.svg";
import InfoIcon from "../../assets/Icons/file-icon.svg";
import UploadIcon from "../../assets/Icons/download-icon.svg";
import PayIcon from "../../assets/Icons/pay-icon.svg";

const stepIcons = [BoxIcon, QuoteIcon, InfoIcon, UploadIcon, PayIcon];

const steps = [
  "Select Product",
  "Get Quote",
  "Additional Information",
  "Upload Document",
  "Pay",
];

export default function StepperPage({
  currentStep,
  onStepChange,
  isMobile,
  isDark,
}: {
  currentStep: number;
  onStepChange: (n: number) => void;
  isMobile: boolean;
  isDark: boolean;
}) {
  return (
    <div
      className={`${styles.container} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.nav}>
        <button
          className={styles.navButton}
          onClick={() => {
            if (currentStep === 0) {
              console.log("Exit clicked");
            } else {
              onStepChange(currentStep - 1);
            }
          }}
        >
          ‹ {currentStep === 0 ? "Exit" : "Back"}
        </button>
      </div>
      <Stepper
        steps={steps.map((label, i) => ({
          label,
          status:
            i < currentStep
              ? "completed"
              : i === currentStep
                ? "active"
                : "upcoming",
          icon: (
            <img
              src={stepIcons[i]}
              alt={`${label} icon`}
              className={styles.stepIcon}
            />
          ),
        }))}
        isMobile={isMobile}
        onStepClick={onStepChange}
      />
    </div>
  );
}
