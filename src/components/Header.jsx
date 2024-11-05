// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { LanguageContext } from "../App";

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h1>{language === "en" ? "aplikasi bahasa" : "todo app"}</h1>
      </div>
      <div>
        <button
          onClick={() => setLanguage(language === "en" ? "id" : "en")}
          className="btn btn-primary"
        >
          {language === "en" ? "english" : "indonesia"}
        </button>
      </div>
    </div>
  );
};

export default Header;
