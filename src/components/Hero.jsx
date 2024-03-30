import { Link } from "react-router-dom";
import banner from '../assets/images/banner.jpg';

const Hero = ({
  title = "Jobby",
  subtitle = "Experience excellence like never before with our exclusive products and services.",
}) => {
  return (
    <div class="relative bg-gradient-to-r from-orange-900 to-orange-100 py-16 font-[sans-serif]">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src={banner}
          alt="Background Image"
          class="w-full object-cover mt-[-20px] opacity-50"
        />
      </div>
      <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Welcome to {title}
        </h1>
        <p class="text-lg md:text-xl mb-8">{subtitle}</p>
        <Link
          to="/jobs"
          className="bg-amber-500 hover:bg-amber-700 text-white text-base font-semibold px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          Browse Jobs
        </Link>
        <Link
          to="/add-job"
          className="bg-amber-500 hover:bg-amber-700 text-white text-base font-semibold px-8 py-2.5 ml-2 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          Add Job
        </Link>
      </div>
    </div>
  );
};
export default Hero;
