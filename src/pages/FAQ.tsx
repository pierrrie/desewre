import HeaderTop from '../components/header/headerTop/HeaderTop';
import Faq from '../components/main/faq/Faq';
import Footer from '../components/footer/Footer';

interface FAQPageProps {
  onOpen: () => void;
  handleCloseModal: () => void;
  isModalOpen: boolean;
}

export default function FAQPage({ 
  onOpen, 
  handleCloseModal: _handleCloseModal, 
  isModalOpen: _isModalOpen 
}: FAQPageProps) {
  return (
    <>
      <HeaderTop onOpen={onOpen} />
      <Faq onOpen={onOpen} />
      <Footer />
    </>
  );
}
