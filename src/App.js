import React from "react";
import "./App.css";
import {
  FancyButton,
  DateInput,
  DateInputGroup,
  Fieldset,
  Alert,
} from "kalimarcomponents/dist";
import "./app.scss";

function App() {
  return (
    <div className="App" style={{ width: 640, margin: "15px auto" }}>
      <Fieldset legend="Date of birth">
        <span className="usa-hint" id="dateOfBirthHint">
          mm/dd/yyyy
        </span>
        <DateInputGroup>
          <DateInput
            id="testDateInputMonth"
            name="testName"
            label="Month"
            unit="month"
            maxLength={2}
            minLength={2}
          />
          <DateInput
            id="testDateInputDay"
            name="testName"
            label="Day"
            unit="day"
            maxLength={2}
            minLength={2}
          />
          <DateInput
            id="testDateInputYear"
            name="testName"
            label="Year"
            unit="year"
            maxLength={4}
            minLength={4}
          />
        </DateInputGroup>
        <FancyButton disabled type="button">
          Save the Date
        </FancyButton>
      </Fieldset>
      <Alert
        type="warning"
        heading="warning status"
        cta={
          <FancyButton type="button" outline>
            Click to acknowledge
          </FancyButton>
        }
      >
        foo thing.
      </Alert>
    </div>
  );
}

export default App;
