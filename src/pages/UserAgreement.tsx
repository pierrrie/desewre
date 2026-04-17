import HeaderTop from '../components/header/headerTop/HeaderTop';
import TermsOfService from '../components/legal/TermsOfService';
import Footer from '../components/footer/Footer';

interface UserAgreementPageProps {
  onOpen: () => void;
}

export default function UserAgreementPage({ onOpen }: UserAgreementPageProps) {
  return (
    <>
      <HeaderTop onOpen={onOpen} />
      <TermsOfService />
      <Footer />
    </>
  );
}
