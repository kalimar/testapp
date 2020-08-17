import React from "react";
import "./App.css";
import {
  Table,
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
            id="testDateInputYear N"
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
      <Table
        bordered={true}
        fullWidth={true}
        caption="This table has very important numbers"
      >
        <thead>
          <tr>
            <th id="numbers">Important Numbers</th>
            <th id="significance">Significance to answers</th>
            <th id="popularity">Popularity</th>
            <th id="decimals">Decimal Places</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th id="hitchhikers" headers="numbers">
              42
            </th>
            <th headers="significance hitchhikers">100%</th>
            <th headers="popularity hitchhikers">50%</th>
            <th headers="decimals hitchhikers">none</th>
          </tr>
          <tr>
            <th id="pi" headers="numbers">
              pi
            </th>
            <th headers="pi significance">80%</th>
            <th headers="pi popularity">100%</th>
            <th headers="pi decimals">infinite</th>
          </tr>
          <tr>
            <th id="tau" headers="numbers">
              tau
            </th>
            <th headers="tau significance">90%</th>
            <th headers="tau popularity">20%</th>
            <th headers="tau decimals">infinite</th>
          </tr>
        </tbody>
      </Table>
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
