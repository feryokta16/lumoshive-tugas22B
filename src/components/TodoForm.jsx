// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import { LanguageContext } from "../App";

// eslint-disable-next-line react/prop-types
function TodoForm({ handleSubmit, handleInputChange, input }) {
  const { language } = useContext(LanguageContext);
  return (
    <form className="d-flex mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="Tambah todo..."
        value={input}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-primary">
        {language === "en" ? "tambah" : "add"}
      </button>
    </form>
  );
}

export default TodoForm;
