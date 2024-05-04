import { useState } from 'react';

const JobListing = ({ job }: Props) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    let description = job.description;
    if (!showFullDescription) {
        description = description.substring(0, 90) + '...';
    }
    return (
        // Container
        <div className="bg-white rounded-xl shadow-md relative">

            {/* Container */}
            <div className="p-4">

                {/* Title | Type */}
                <div className="mb-6">

                    {/* Title */}
                    <div className="text-gray-600 my-2">
                        {job.type}
                    </div>

                    {/* Job Type */}
                    <h3 className="text-xl font-bold">
                        {job.title}
                    </h3>

                </div>

                {/* Job Description */}
                <div className="mb-5">
                    {description}
                </div>

                <button className="text-indigo-500 mb-5 hover:text-indigo-600">
                    { showFullDescription ? 'Less' : 'More' }
                </button>

                {/* Salary */}
                <h3 className="text-indigo-500 mb-2">
                    {job.salary}
                </h3>

                {/* Horizontal Line */}
                <div className="border border-gray-100 mb-5"></div>

                {/* Container */}
                <div className="flex flex-col lg:flex-row justify-between mb-4">

                    {/* Location */}
                    <div className="text-orange-700 mb-3">
                        <i className="fa-solid fa-location-dot text-lg"></i>
                        {job.location}
                    </div>

                    {/* Read More Link */}
                    <a href={`/job/${job.id}`} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                        Read More
                    </a>

                </div>
            </div>
        </div>
    );
}

export default JobListing;

interface Job {
    id: string;
    title: string;
    type: string;
    description: string;
    location: string;
    salary: string;
    company: {
        name: string;
        description: string;
        contactEmail: string;
        contactPhone: string;
    }
}

interface Props {
    job: Job;
}
