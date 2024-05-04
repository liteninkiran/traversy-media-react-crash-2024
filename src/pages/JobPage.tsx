import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Job } from "../components/JobListing";
import { Spinner } from "../components/Spinner";

export const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const url = `/api/jobs/${id}`;
            try {
                const res = await fetch(url);
                const data = await res.json();
                setJob(data);
            } catch (err) {
                console.log('Error fetching data', err);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, [id]);

    return (
        loading ? <Spinner loading={loading} /> : <h1>{job?.title}</h1>
    );
}
