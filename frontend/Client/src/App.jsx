import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Hero, Navbar, Overview} from "./components";
import {Mainpage,Heart,Diabetes} from "./components";

import { UserProvider } from "./UserContext";

const App = () => {

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage/>} />
          <Route path="/heart" element={<Heart/>} />
          <Route path="/form" element={<Diabetes/>} />
          {/* <Route path="/mri" element={<MRI/>}/> */}
        </Routes>
      </Router>
    </UserProvider>

    // <BrowserRouter>
    //   <div className='relative z-0 bg-primary'>
    //     <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    //       <Navbar />
    //       <Hero />
    //     </div>
    //     <Overview />
    //     {/* <Experience /> */}
    //     {/* <Tech /> */}
    //     {/* <Works /> */}
    //     {/* <Feedbacks /> */}
    //     {/* <div className='relative z-0'>
    //       <Contact />
    //       <StarsCanvas />
    //     </div> */}
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
