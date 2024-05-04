import jobs from '../jobs.json';

interface Job {
    id: number;
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

const JobListings = () => {
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        jobs.map((job) => {
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
                                            {job.description}
                                        </div>
            
                                        {/* Salary */}
                                        <h3 className="text-indigo-500 mb-2">
                                            {job.salary}
                                        </h3>
            
                                        {/* Not sure what this is */}
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
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default JobListings;
