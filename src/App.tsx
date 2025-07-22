import { useState } from "react";
import PrimaryButton from "./components/button/PrimaryButton.component";
// import light from "./assets/lightbulb-filament.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DestructiveButton from "./components/button/DestructiveButton.component";
import SecondaryButton from "./components/button/SecondaryButton.component";
import TextInput from "./components/TextInputField/TextInput.component";
import PasswordInput from "./components/TextInputField/PasswordInput.component";
import TelephoneInput from "./components/TextInputField/TelephoneInput.component";
import Dropdown from "./components/TextInputField/Dropdown.component";
import SearchBox from "./components/TextInputField/SearchBox.component";
import { isDark } from "./constants/data";

import styles from "../src/constants/global.module.css";

import {
  FaBox,
  FaFileInvoice,
  FaFileAlt,
  FaUpload,
  FaPaperPlane,
} from "react-icons/fa";
import StepperPage from "./components/Stepper/StepperPage";

function App() {
  const [, setCount] = useState(0);
  const [loading] = useState(true);
  // const [someVal, setSomeVal] = useState("");
  // const [password, setPassword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Select Product", icon: <FaBox /> },
    { title: "Get Quote", icon: <FaFileInvoice /> },
    { title: "Additional Information", icon: <FaFileAlt /> },
    { title: "Upload document", icon: <FaUpload /> },
    { title: "Submit", icon: <FaPaperPlane /> },
  ];

  return (
    <div
      className={
        isDark ? styles.dsBodyContainerDark : styles.dsBodyContainerLight
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
      <div className={styles.dsContainer}>
        <div className="p-4 space-y-6">
          <StepperPage
            currentStep={currentStep}
            onStepChange={(i: number) => {
              setCurrentStep(i);
            }}
            isMobile={window.screen.availWidth < 1024}
            isDark={false} // or false for white background
          />
          {/* {[0, 1, 2, 3, 4].map((step) => (
            <StepperPage
              key={step}
              currentStep={step}
              onStepChange={() => {}}
              isMobile={false}
              isDark={false} // or false for white background
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;
