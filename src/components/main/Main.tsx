import About from "./about/About";
import Services from "./services/Services";
import Cases from "./cases/Cases";
import Order from "./order/Order";
import FormMain from "./form/formMain";

function Main() {
  return (
    <main>
        <div className="container">
            <About />
            <Services />
            <Cases />
            <Order />
            <FormMain />
        </div>
    </main>
  );
}

export default Main;
