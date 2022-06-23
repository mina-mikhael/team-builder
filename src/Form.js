import React from "react";

const TeamForm = (props) => {
  const { values, update, submit } = props;

  const updateHandler = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    update(name, value);
  };

  const formSubmitter = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={formSubmitter}>
      <div>
        <label>
          Username
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={updateHandler}
            placeholder="enter username"
            maxLength="30"
            required
          />
        </label>
      </div>

      <div>
        <label>
          {" "}
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={updateHandler}
            placeholder="enter your email"
            maxLength="30"
            minLength="7"
            required
          />
        </label>
      </div>

      <div>
        <label>
          Role:
          <select name="role" value={values.role} onChange={updateHandler}>
            <option disabled value="">
              --Select a Role--
            </option>
            <option value="back-end"> Back-end Engineer </option>
            <option value="front-end"> Front-end Engineer </option>
            <option value="design"> Designer </option>
          </select>
        </label>
      </div>
      <div>
        <button> Submit</button>
      </div>
    </form>
  );
};

export default TeamForm;
