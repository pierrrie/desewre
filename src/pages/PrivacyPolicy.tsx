import HeaderTop from '../components/header/headerTop/HeaderTop';
import PrivacyPolicy from '../components/legal/PrivacyPolicy';
import Footer from '../components/footer/Footer';

interface PrivacyPolicyPageProps {
  onOpen: () => void;
}

export default function PrivacyPolicyPage({ onOpen }: PrivacyPolicyPageProps) {
  return (
    <>
      <HeaderTop onOpen={onOpen} />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
