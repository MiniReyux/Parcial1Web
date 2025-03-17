import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider } from "react-intl";

import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

const messages = {
  en: localeEnMessages,
  es: localeEsMessages,
};


const getBrowserLanguage = () => {
  const lang = navigator.language.split("-")[0];
  return messages[lang] ? lang : "en"; 
};

const Root = () => {const [locale, setLocale] = useState(getBrowserLanguage());

  const switchLanguage = (lang) => {
    setLocale(lang);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Container>
        <Row>
          <Col>
            <App switchLanguage={switchLanguage} />
          </Col>
        </Row>
      </Container>
    </IntlProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

reportWebVitals();
