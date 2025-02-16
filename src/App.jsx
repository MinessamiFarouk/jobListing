import {Route, createBrowserRouter,createRoutesFromElements, RouterProvider} from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import NotFoundPage from "./pages/NotFoundPage"
import JobPage, {jobLoader} from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"
import EditeJobPge from "./pages/EditeJobPge"



const App = () => {

  // all the request

  // add job
  const newJob = async (job) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return
  }
  
  // delele job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })
    return
  }

  // edit job 
  const editedjob = async (job) =>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return
  }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage addNewJob={(newJob)}/>} />
      <Route path="/edite-job/:id" element={<EditeJobPge editedJobSubmit={editedjob}/>} loader={jobLoader} />
      <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  
  ))

  return <RouterProvider router={router} />
  
}

export default App
