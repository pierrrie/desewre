import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./css/style.css";
import "./css/adaptive/adaptive.css"
import "./css/faq.css"
import "./css/legal.css"
import "./fonts/stylesheet.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Form from "./components/forms/Lid"; 
import Contacts from "./pages/Contacts";
import HeaderTop from "./components/header/headerTop/HeaderTop";
import Cases from "./pages/Cases";
import Services from "./pages/Services";
import WebServices from "./pages/WebServices";
import DesignServices from "./pages/DesignServices";
import SeoServices from "./pages/SeoServices";
import MarketingServices from "./pages/MarketingServices";
import ContentServices from "./pages/ContentServices";
import SupportServices from "./pages/SupportServices";
import AutoServices from "./pages/AutoServices";
import ThankYou from "./pages/ThankYou";
import FAQPage from "./pages/FAQ";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import UserAgreementPage from "./pages/UserAgreement";
import DataProcessingConsentPage from "./pages/DataProcessingConsent";
import CaseExample from "./pages/CaseExample";
import ProtekCase from "./pages/ProtekCase";
import ParadigmaCase from "./pages/ParadigmaCase";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    
    <Router>
      <ScrollToTop />
      <Form Open={isModalOpen} Close={handleCloseModal} />
      <Routes>

        <Route path="/" element={
          <>
            <Header onOpen={handleOpenModal} />
            <Main onOpen={handleOpenModal} /> 
            <Footer />
          </>
        }/>


        <Route path="/contacts" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <Contacts />
            <Form Open={isModalOpen} Close={handleCloseModal} />
            <Footer />
          </>
        }/>

        <Route path="/cases" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <Cases />
            <Footer />
          </>
        }/>

        <Route path="/case-example" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <CaseExample onOpen={handleOpenModal} />
            <Footer />
          </>
        }/>

        <Route path="/protek-case" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <ProtekCase onOpen={handleOpenModal} />
            <Footer />
          </>
        }/>

        <Route path="/paradigma-case" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <ParadigmaCase onOpen={handleOpenModal} />
            <Footer />
          </>
        }/>

        <Route path="/services" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <Services onOpen={handleOpenModal} />
            <Footer />
          </>
        }/>

        <Route path="/webservices" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <WebServices onOpen={handleOpenModal} />
            <Footer />
          </>
        }/>

        <Route path="/designServices" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <DesignServices onOpen={handleOpenModal} />
            <Footer />
          </>
        }/>

        <Route path="/seoServices" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <SeoServices onOpen={handleOpenModal} />
            <Footer />
          </>
        }/>

        <Route path="/marketingServices" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <MarketingServices onOpen={handleOpenModal} />
            <Footer />
          </>
        }/>

        <Route path="/contentServices" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <ContentServices onOpen={handleOpenModal} />
            <Footer />
          </>
        }/>

        <Route path="/supportServices" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <SupportServices onOpen={handleOpenModal} />
            <Footer />
          </>
        }/>

        <Route path="/autoServices" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <AutoServices onOpen={handleOpenModal} />
            <Footer />
          </>
        }/>

        <Route path="/thank-you" element={
          <>
            <HeaderTop onOpen={handleOpenModal} />
            <ThankYou />
            <Footer />
          </>
        }/>

        <Route path="/faq" element={
          <>
            <FAQPage onOpen={handleOpenModal} handleCloseModal={handleCloseModal} isModalOpen={isModalOpen} />
            <Form Open={isModalOpen} Close={handleCloseModal} />
          </>
        }/>

        <Route path="/privacy-policy" element={
          <>
            <PrivacyPolicyPage onOpen={handleOpenModal} />
            <Form Open={isModalOpen} Close={handleCloseModal} />
          </>
        }/>

        <Route path="/user-agreement" element={
          <>
            <UserAgreementPage onOpen={handleOpenModal} />
            <Form Open={isModalOpen} Close={handleCloseModal} />
          </>
        }/>

        <Route path="/data-processing-consent" element={
          <>
            <DataProcessingConsentPage onOpen={handleOpenModal} />
            <Form Open={isModalOpen} Close={handleCloseModal} />
          </>
        }/>

      </Routes>
    </Router>
  );
}

export default App;