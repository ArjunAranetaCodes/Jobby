import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    
    <nav class="bg-gray-800 p-4">
      <ul class="flex justify-between items-center w-96 mx-auto">
        <NavLink to='/' className={linkClass}>
          Home
        </NavLink>
        <NavLink to='/jobs' className={linkClass}>
          Jobs
        </NavLink>
        <li class="mx-10">
          <a href="#" class="text-white font-bold" alt="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
              />
            </svg>
          </a>
        </li>
        <NavLink to='/add-job' className={linkClass}>
          Add Job
        </NavLink>
        <li><a href="#" class="text-white">About</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;
