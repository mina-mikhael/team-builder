import "./App.css";
import React, { useState } from "react";
import TeamForm from "./Form";

const initialFormData = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamData, setTeamData] = useState([]);
  const [formValues, setFormValues] = useState(initialFormData);

  const onChange = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const onSubmit = () => {
    setTeamData([...teamData, formValues]);
    setFormValues(initialFormData);
  };

  return (
    <div className="container">
      <h1>Team Builder</h1>
      <div className="container">
        <TeamForm values={formValues} update={onChange} submit={onSubmit} />
        {teamData &&
          teamData.map((member, idx) => {
            return (
              <div key={idx}>
                <h3> Username: {member.name}</h3>
                <h3> Email: {member.email}</h3>
                <h3> Role: {member.role}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
