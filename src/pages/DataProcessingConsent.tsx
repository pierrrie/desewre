import HeaderTop from '../components/header/headerTop/HeaderTop';
import DataProcessingConsent from '../components/legal/DataProcessingConsent';
import Footer from '../components/footer/Footer';

interface DataProcessingConsentPageProps {
  onOpen: () => void;
}

export default function DataProcessingConsentPage({ onOpen }: DataProcessingConsentPageProps) {
  return (
    <>
      <HeaderTop onOpen={onOpen} />
      <DataProcessingConsent />
      <Footer />
    </>
  );
}
