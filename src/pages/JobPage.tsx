// import { useParams, useLoaderData } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { Job } from '../components/JobListing';

export const JobPage = () => {
    // const { id } = useParams();
    const job: Job = useLoaderData() as Job;

    return (
        <h1>{job?.title}</h1>
    );
}

export const jobLoader = async ({ params }: LoaderProps) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

interface LoaderProps {
    params: {
        id: number;
    };
}
