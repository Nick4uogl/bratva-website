import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import ProjectPage from './components/ProjectPage/ProjectPage'
import { IntlProvider } from "react-intl"
import { LOCALES } from "./i18n/locales.js"
import { messages } from "./i18n/messages.js"

function App() {
  const locale = LOCALES.ENGLISH
  const [currentLocale, setCurrentLocale] = React.useState(locale);
  return (
    <IntlProvider messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}>
      <Routes>
        <Route path="/bratva-website" element={<Home currentLocale={currentLocale} setLocale={setCurrentLocale} />} />
        <Route path='/:projectId' element={<ProjectPage />} />
      </Routes>
    </IntlProvider>
  );
}

export default App;
