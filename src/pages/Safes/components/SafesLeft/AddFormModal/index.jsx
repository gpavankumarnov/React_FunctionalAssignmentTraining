import React from "react";
import "./index.css";

function AddFormModal() {
  return (
    <div className="addForm_Container">
      <div className="addForm__form">
        <h2>Create Safe</h2>
        <p>
          A Safe is a logical unit to store the secrets. All the safes are
          created within Vault. You can control access only at the safe level.
          As a vault administrator you can manage safes but cannot view the
          content of the safe.
        </p>

        <form>
          <label htmlFor="safeName">Safe Name</label>
          <input type="text" placeholder="Safe Name" name="safeName"></input>
          <label htmlFor="owner">Owner</label>
          <input type="text" placeholder="Owner" name="ownerName"></input>
          <label htmlFor="type">Type</label>
          <input type="text" placeholder="Personal" name="personalText"></input>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="Description"
            name="descriptionText"
          ></input>
          <p>Please add a minimum of 10 characters</p>
          <div className="create__cancelBtn">
            <button>Cancel</button>
            <button>+Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddFormModal;
