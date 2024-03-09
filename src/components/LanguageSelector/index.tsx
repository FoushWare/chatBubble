import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, SelectorButtons } from "./LanguageSelector.style";
import { LanguageSelectorProps } from "./LanguageSelector";
import { Helmet } from "react-helmet";

const LanguageSelector = ({ accentColor }: LanguageSelectorProps) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Extract language from the pathname
    const language = location.pathname.replace(/\//g, "");
    if (["en", "ar"].includes(language)) {
      i18n.changeLanguage(language);
    }
  }, [i18n, location.pathname]);

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
    // Update route with language parameter
    window.history.pushState({}, "", `/${lng}`);
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }} />
      <SelectorButtons>
        {/* Change language button */}
        <Button
          onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
          accentColor={accentColor}
        >
          {i18n.language === "en" ? "العربيه" : "English"}
        </Button>
      </SelectorButtons>
    </>
  );
};
export default LanguageSelector;
