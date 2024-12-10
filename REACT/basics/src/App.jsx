import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import JSXrule from "./components/JSXrule";
import MainContent from "./components/MainContent";
import ProductInfo from "./components/ProductInfo";
import WelcomeMessage from "./components/WelcomeMessage";

const App = ()=>{
  return <div>
    <Header/>
    <Greeting/>
    <ProductInfo/>
    <WelcomeMessage/>
    <JSXrule/>
    <MainContent/>
    <Footer/>
  </div>
}

export default App;