import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { JobPage, jobLoader } from './pages/JobPage';
import { MainLayout } from './layouts/MainLayout';
import { NotFoundPage } from './pages/NotFoundPage';
import { AddJobPage } from './pages/AddJobPage';
import { Job } from './components/JobListing';
import { EditJobPage } from './pages/EditJobPage';

const App = () => {
    const addJob = async (newJob: Job): Promise<void> => {
        const res = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob),
        });
        console.log(res);
        return;
    }

    const deleteJob = async (id: string): Promise<void> => {
        const res = await fetch(`/api/jobs/${id}`, {
            method: 'DELETE',
        });
        console.log(res);
        return;
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/jobs' element={<JobsPage />} />
                <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
                <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
                <Route path='/jobs/edit/:id' element={<EditJobPage />} loader={jobLoader} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
