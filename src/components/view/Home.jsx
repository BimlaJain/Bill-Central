// import './App.css';
import Hero from '../home/Hero';
import Comprehensive from '../home/Comprehensive';
import WhyChoose from '../home/WhyChoose';
import Testimonials from '../home/Testimonial';
import Companies from '../home/Companies';
import EnergyPlans from '../home/EnergyPlans';
import SimpleSteps from '../home/SimpleSteps';

function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <EnergyPlans />
      <SimpleSteps/>
      <Comprehensive />
      <WhyChoose />
      <Testimonials />
    </>
  );
}

export default Home;
