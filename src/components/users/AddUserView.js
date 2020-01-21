import React from "react";
import "./user.css";

import LinkButton from "../utilities/LinkButton";

const AddUserView = props => {
  const { name, email, location, handleSubmit, handleChange } = props;

  return (
    <>
      <div>
        <h1>Add User</h1>
      </div>
      <div className="input">
        <form
          style={{
            display: "flex",
            flexDirection: "column"
          }}
          onSubmit={handleSubmit}
        >
          <div>
            <p class="input_field">Name:</p>
            <input
              className="box"
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <p class="input_field">Email:</p>
            <input
              className="box"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <p class="input_field">Location:</p>
            <input
              className="box"
              name="location"
              type="text"
              value={location}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input className="box" type="submit" value="Submit" id="submit" />
          </div>
        </form>
      </div>
      <LinkButton className="button" to="/users">
        All Users
      </LinkButton>
    </>
  );
};

export default AddUserView;
