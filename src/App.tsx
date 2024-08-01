import {
  Appointment,
  Contact,
  Doctor,
  Footer,
  Header,
  Hello,
  Location,
  Pricing,
  Quote,
  Services,
  Welcome,
} from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hello />
        <Quote />
        <Welcome />
        <Location />
        <Doctor />
        <Services />
        <Pricing />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
