import "./App.css";
import DivExpand from "./components/DivExpand";
import DropDown from "./components/DropDown";
import MenuSection from "./components/MenuSection";
import Toggle from "./components/Toggle";
import {motion,useScroll} from 'framer-motion'

function App() {

  const { scrollYProgress} = useScroll();

  return <div className="App">
    <motion.div style={{scaleX: scrollYProgress}} className="topBar"/>
    <DivExpand/>
    <DropDown/>
    <MenuSection/>
    <Toggle/>
  </div>;
}

export default App;
