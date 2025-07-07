import {Hero, Navbar, Overview, MRICanvas, MRIForm, Result} from "../../components";
import {mriSystem, mriOverview, mri_navLinks} from "../../constants";

const MRI = () => {
  return (
    <>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar system={mriSystem} navLinks={mri_navLinks}/>
          <Hero system={mriSystem} model={MRICanvas}/>
        </div>
        <Overview system={mriSystem} overview={mriOverview}/>
        <MRIForm />
        <Result />
      </div>
    </>
  );
}

export default MRI; 