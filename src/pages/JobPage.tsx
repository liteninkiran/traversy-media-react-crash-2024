import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Job } from '../components/JobListing';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { toast } from 'react-toastify';

export const JobPage = ({ deleteJob }: Props) => {
    const job: Job = useLoaderData() as Job;
    const navigate = useNavigate();
    const onDeleteClick = (id: string): void => {
        const confirm = window.confirm('Are you sure?');
        if (!confirm) {
            return;
        }
        deleteJob(id);
        toast.success('Job deleted successfully');
        navigate('/jobs');
    }

    return (
        <>
            {/* Back */}
            <section>
                <div className='container m-auto py-6 px-6'>
                    <Link to='/jobs' className='text-indigo-500 hover:text-indigo-600 flex items-center'>
                        <FaArrowLeft className='mr-2' />
                    </Link>
                </div>
            </section>

            {/* Main Content */}
            <section className='bg-indigo-50'>

                {/* Container */}
                <div className='container m-auto py-10 px-6'>

                    {/* Container */}
                    <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>

                        {/* Main Content */}
                        <main>

                            {/* Card 1 */}
                            <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>

                                {/* Job Type */}
                                <div className='text-gray-500 mb-4'>
                                    {job.type}
                                </div>

                                {/* Job Title */}
                                <h1 className='text-3xl font-bold mb-4'>
                                    {job.title}
                                </h1>

                                {/* Location */}
                                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>

                                    {/* Icon */}
                                    <FaMapMarker className='text-orange-700 mr-2' />

                                    {/* Location */}
                                    <p className='text-orange-700'>
                                        {job.location}
                                    </p>

                                </div>

                            </div>

                            {/* Card 2 */}
                            <div className='bg-white p-6 rounded-lg shadow-md mt-6'>

                                {/* Job Description */}
                                <>
                                    <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                                        Job Description
                                    </h3>

                                    <p className='mb-4'>
                                        {job.description}
                                    </p>
                                </>

                                {/* Salary */}
                                <>
                                    <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                                        Salary
                                    </h3>

                                    <p className='mb-4'>
                                        {job.salary}
                                    </p>
                                </>
                            </div>

                        </main>

                        {/* Aside */}
                        <aside>

                            {/* Card 3 */}
                            <div className='bg-white p-6 rounded-lg shadow-md'>

                                {/* Card Title */}
                                <h3 className='text-xl font-bold mb-6'>
                                    Company Info
                                </h3>

                                {/* Company Name */}
                                <h2 className='text-2xl'>
                                    {job.company.name}
                                </h2>

                                {/* Company Details */}
                                <p className='my-2'>
                                    {job.company.description}
                                </p>

                                <hr className='my-4' />

                                {/* Email */}
                                <>
                                    <h3 className='text-xl'>
                                        Contact Email:
                                    </h3>

                                    <p className='my-2 bg-indigo-100 p-2 font-bold'>
                                        {job.company.contactEmail}
                                    </p>
                                </>

                                {/* Phone */}
                                <>
                                    <h3 className='text-xl'>
                                        Contact Phone:
                                    </h3>

                                    <p className='my-2 bg-indigo-100 p-2 font-bold'>
                                        {job.company.contactPhone}
                                    </p>
                                </>
                            </div>

                            {/* Card 4 */}
                            <div className='bg-white p-6 rounded-lg shadow-md mt-6'>

                                {/* Title */}
                                <h3 className='text-xl font-bold mb-6'>
                                    Manage Job
                                </h3>

                                {/* Edit Job */}
                                <Link to={`/jobs/edit/${job.id}`} className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'>
                                    Edit Job
                                </Link>

                                {/* Delete Job */}
                                <button onClick={() => onDeleteClick(job.id ?? '')} className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'>
                                    Delete Job
                                </button>

                            </div>

                        </aside>

                    </div>

                </div>

            </section>
        </>
    );
};

export const jobLoader = async ({ params }: LoaderProps) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
};

interface LoaderProps {
    params: {
        id: number;
    };
}

interface Props {
    deleteJob: (id: string) => void;
}
