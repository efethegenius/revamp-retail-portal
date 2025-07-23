import { useState } from "react";
import Header from "./components/Header/Header.component";
import PrimaryButton from "./components/button/PrimaryButton.component";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomToast from "./components/Toast/CustomToast.component";
// import light from "./assets/lightbulb-filament.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { isDark as initialIsDark } from "./constants/data";
import DestructiveButton from "./components/button/DestructiveButton.component";
import SecondaryButton from "./components/button/SecondaryButton.component";
import TextInput from "./components/TextInputField/TextInput.component";
import PasswordInput from "./components/TextInputField/PasswordInput.component";
import TelephoneInput from "./components/TextInputField/TelephoneInput.component";
import Dropdown from "./components/TextInputField/Dropdown.component";
import SearchBox from "./components/TextInputField/SearchBox.component";
import { isDark } from "./constants/data";
import MobileStepper from "./components/Stepper/MobileStepper.component";

import styles from "../src/constants/global.module.css";

import {
  FaBox,
  FaFileInvoice,
  FaFileAlt,
  FaUpload,
  FaPaperPlane,
} from "react-icons/fa";
import Stepper from "./components/Stepper/Stepper.component";

function App() {
  const [, setCount] = useState(0);
  const [loading] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(initialIsDark);
  // const [someVal, setSomeVal] = useState("");
  // const [password, setPassword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [currentStepperStep, setCurrentStepperStep] = useState(0);

  // Toast functions
  const showSuccessToast = () => {
  toast(
    <CustomToast 
      type="success" 
      title="Insert your alert title here!" 
      onClose={() => toast.dismiss()}
      onAction={() => console.log("Action clicked")}
    />, 
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      closeButton: false,

      // 🛑 KEY PART: Remove Toastify's default style
      toastClassName: () => "custom-toast-wrapper",
      bodyClassName: () => "custom-toast-body",
    }
  );
};

  const showWarningToast = () => {
    toast.warning(
      <CustomToast 
        type="warning" 
        title="Insert your alert title here!" 
        onClose={() => toast.dismiss()}
        onAction={() => console.log("Action clicked")}
      />, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      closeButton: false,
    });
  };

  const showErrorToast = () => {
    toast.error(
      <CustomToast 
        type="error" 
        title="Insert your alert title here!" 
        onClose={() => toast.dismiss()}
        onAction={() => console.log("Action clicked")}
      />, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      closeButton: false,
    });
  };

  const handleThemeToggle = (isDark: boolean) => {
    setIsDarkTheme(isDark);
    // You can also update your global isDark constant here if needed
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Implement logout logic here
  };

  const stepperSteps = [
    { label: "Select Product", status: "completed" as const, icon: <FaBox /> },
    { label: "Get Quote", status: "completed" as const, icon: <FaFileInvoice /> },
    { label: "Additional Information", status: "active" as const, icon: <FaFileAlt /> },
    { label: "Upload Documents", status: "upcoming" as const, icon: <FaUpload /> },
    { label: "Pay", status: "upcoming" as const, icon: <FaPaperPlane /> },
  ];

  const updateStepperSteps = (currentStep: number) => {
    return stepperSteps.map((step, index) => ({
      ...step,
      status: index < currentStep ? "completed" as const : 
              index === currentStep ? "active" as const : 
              "upcoming" as const
    }));
  };

  return (
    <div
      className={
        isDarkTheme ? styles.dsBodyContainerDark : styles.dsBodyContainerLight
      }
    >
      <h1>Primary Button</h1>
      <div className={`${styles.dsContainer}`}>
        <PrimaryButton
          id="primary-button"
          label="Primary Button"
          isDisabled={false}
          hasIcon={false}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>

      {/* <div className={`${styles.dsContainer}`}>
        <PrimaryButton
          id="primary-button"
          label="Active"
          isDisabled={false}
          hasIcon={false}
          icon={light}
          onClick={() => setCount((count) => count + 1)}
        />
      </div> */}

      <div className={`${styles.dsContainer}`}>
        <PrimaryButton
          id="primary-button-disabled"
          label="Disabled"
          isDisabled={true}
          hasIcon={false}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>

      <div className={`${styles.dsContainer}`}>
        <PrimaryButton
          id="destructive-button-disabled"
          label={"Not Loading"}
          isDisabled={true}
          hasIcon={false}
          isLoading={loading}
          icon={""}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>

      <h2>Destructive Button</h2>
      <div className={`${styles.dsContainer}`}>
        <DestructiveButton
          id="destructive-button"
          label="Active"
          isDisabled={false}
          hasIcon={false}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>
      {/* <div className={`${styles.dsContainer}`}>
        <DestructiveButton
          id="primary-button"
          label="Active"
          isDisabled={false}
          hasIcon={true}
          icon={light}
          onClick={() => setCount((count) => count + 1)}
        />
      </div> */}

      <div className={`${styles.dsContainer}`}>
        <DestructiveButton
          id="primary-button"
          label="Disabled"
          isDisabled={true}
          hasIcon={false}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>

      <div className={`${styles.dsContainer}`}>
        <DestructiveButton
          id="destructive-button-disabled"
          label={"Not Loading"}
          isDisabled={true}
          hasIcon={false}
          isLoading={loading}
          icon={""}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>

      <h2>Secondary Button</h2>
      <div className={`${styles.dsContainer}`}>
        <SecondaryButton
          id="secondary-button"
          label="Active"
          isDisabled={false}
          hasIcon={false}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>

      <div className={`${styles.dsContainer}`}>
        <SecondaryButton
          id="secondary-button"
          label="Disabled"
          isDisabled={true}
          hasIcon={false}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>

      <div className={`${styles.dsContainer}`}>
        <SecondaryButton
          id="secondary-button-disabled"
          label={"Not Loading"}
          isDisabled={true}
          hasIcon={false}
          isLoading={loading}
          icon={""}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>

      <h2>Text Inputs</h2>

      

      <div className={`${styles.dsContainer}`}>
        <TextInput placeholder="Input Label" />
      </div>

      <div className={`${styles.dsContainer}`}>
        <TextInput placeholder="Input Label" disabled />
      </div>

      <div className={`${styles.dsContainer}`}>
        <TextInput placeholder="Input Label" value="yetyeryt" disabled />
      </div>
      {/* 
      <TextInput
        label="Email"
        value="preloaded@email.com"
        onChange={(val) => console.log(val)}
      /> */}

      <div className={`${styles.dsContainer}`}>
        <TextInput
          label="Input Label"
          placeholder="Input field"
          showLabel={true}
          variant="error"
          error={true}
          feedback="Feedback"
        />
      </div>

      <div>Password</div>
      <div className={`${styles.dsContainer}`}>
        <PasswordInput
          label="Input Label"
          placeholder="Enter password"
          showToggle
          type="password"
          value=""
        />
      </div>
      <div className={`${styles.dsContainer}`}>
        <PasswordInput
          placeholder="Enter your password"
          value={passwordVal}
          onChange={setPasswordVal}
          isHighlighted
          disabled
        />
      </div>

      <div className={`${styles.dsContainer}`}>
        <PasswordInput
          placeholder="Enter your password"
          value="password"
          onChange={setPasswordVal}
          isHighlighted
          disabled
        />
      </div>
      <div className={`${styles.dsContainer}`}>
        <PasswordInput
          label="Input Label"
          placeholder="Input field"
          showLabel={true}
          variant="error"
          error={true}
          feedback="Feedback"
        />
      </div>

      <h2>Telephone Inputs</h2>

      <div className={`${styles.dsContainer}`}>
        <TelephoneInput placeholder="Enter phone number" />
      </div>

      <div className={styles.dsContainer}>
        <TelephoneInput
          label="Enter Phone Number"
          placeholder="Enter phone number"
          disabled
          isHighlighted={false}
          value=""
        />
      </div>
      <div className={`${styles.dsContainer}`}>
        <TelephoneInput
          label="Enter Phone Number"
          placeholder="Enter phone number"
          showLabel={true}
          disabled
          isHighlighted={false}
          value=""
        />
      </div>

      <div className={`${styles.dsContainer}`}>
        <TelephoneInput
          label="Enter Phone Number"
          placeholder="Enter phone number"
          showLabel={true}
          error={true}
          feedback="Invalid phone number"
          value=""
        />
      </div>

      <div className={`${styles.dsContainer}`}>
        <Dropdown
          label="Dropdown content"
          searchable
          options={[
            "Premium is too high",
            "Found a more competitive offer",
            "Others (Please specify)",
          ]}
        />
      </div>

      <div className={`${styles.dsContainer}`}>
        <SearchBox
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search"
        />
      </div>

      <h2>Stepper Component</h2>
      <div className={`${styles.dsContainer}`}>
        <Stepper
          steps={updateStepperSteps(currentStepperStep)}
          currentStep={currentStepperStep}
          onBack={() => {
            if (currentStepperStep > 0) {
              setCurrentStepperStep(currentStepperStep - 1);
            }
          }}
          onExit={() => {
            console.log("Exit clicked");
            setCurrentStepperStep(0);
          }}
        />
      </div>

      <h2>Mobile Stepper Component</h2>
      <div className={`${styles.dsContainer}`}>
        <MobileStepper
          steps={updateStepperSteps(currentStepperStep)}
          currentStep={currentStepperStep}
          onBack={() => {
            if (currentStepperStep > 0) {
              setCurrentStepperStep(currentStepperStep - 1);
            }
          }}
          onExit={() => {
            console.log("Exit clicked");
            setCurrentStepperStep(0);
          }}
        />
      </div>

      <div className={`${styles.dsContainer}`} style={{ marginTop: "20px" }}>
        <button 
          onClick={() => {
            if (currentStepperStep < stepperSteps.length - 1) {
              setCurrentStepperStep(currentStepperStep + 1);
            }
          }}
          disabled={currentStepperStep >= stepperSteps.length - 1}
          style={{
            padding: "8px 16px",
            backgroundColor: currentStepperStep >= stepperSteps.length - 1 ? "#ccc" : "#02ccfe",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: currentStepperStep >= stepperSteps.length - 1 ? "not-allowed" : "pointer"
          }}
        >
          Next Step (Demo)
        </button>
      </div>

      <h2>Header Component</h2>
      <div className={`${styles.dsContainer}`}>
        <Header onThemeToggle={handleThemeToggle} onLogout={handleLogout} />
      </div>

      <h2>Toast Notifications</h2>
      <div className={`${styles.dsContainer}`}>
        <PrimaryButton
          id="success-toast-button"
          label="Show Success Toast"
          isDisabled={false}
          hasIcon={false}
          onClick={showSuccessToast}
        />
      </div>

      <div className={`${styles.dsContainer}`}>
        <SecondaryButton
          id="warning-toast-button"
          label="Show Warning Toast"
          isDisabled={false}
          hasIcon={false}
          onClick={showWarningToast}
        />
      </div>

      <div className={`${styles.dsContainer}`}>
        <DestructiveButton
          id="error-toast-button"
          label="Show Error Toast"
          isDisabled={false}
          hasIcon={false}
          onClick={showErrorToast}
        />
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkTheme ? "dark" : "light"}
      />
    </div>
  );
}

export default App;
