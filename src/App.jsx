import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Locker from "./Pages/Locker/Locker";
import Main from "./Pages/Main/Main";
function App() {

  return (
    <>
      <Header />
      <div style={{ minHeight: '500px' }} className="container">
        {/* <Main /> */}
        {/* <About /> */}
        <Locker />
      </div>
      <Footer />
    </>
  );
}

export default App;
