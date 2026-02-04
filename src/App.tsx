import { useState } from "react";
import "./css/style.css";
import "./css/adaptive/adaptive.css"
import "./fonts/stylesheet.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Form from "./components/forms/Lid"; 


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpen={handleOpenModal} />
      <Main onOpen={handleOpenModal} /> 
      <Footer />
      <Form Open={isModalOpen} Close={handleCloseModal} />
    </>
  );
}

export default App;