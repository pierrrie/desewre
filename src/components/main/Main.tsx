import About from "./about/About";
import Services from "./services/Services";
import Cases from "./cases/Cases";
import Order from "./order/Order";
import FormMain from "./form/formMain";

interface onOpen {
  onOpen: () => void;
}

function Main({onOpen}: onOpen) {
  return (
    <main>
        <div className="container">
            <About />
            <Services onOpen={onOpen} />
            <Cases />
            <Order onOpen={onOpen} />
            <FormMain onOpen={onOpen} />
        </div>
    </main>
  );
}

export default Main;
