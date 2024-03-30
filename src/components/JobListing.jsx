import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className='bg-zinc-100 p-6 rounded-lg shadow-xl relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-gray-600 my-2'>{job.type}</div>
          <h3 className='text-xl font-mono font-bold text-[#374151]'>{job.title}</h3>
        </div>

        <div className='mb-5'>{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className='text-fuchsia-500 mb-5 hover:text-green-800'
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>

        <h3 className='text-green-800 mb-2'>{job.salary} / Year</h3>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-fuchsia-950 mb-3'>
            <FaMapMarker className='inline text-lg mb-1 mr-1' />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className='h-[36px] bg-amber-500 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default JobListing;
