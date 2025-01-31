import {Route, createBrowserRouter,createRoutesFromElements, RouterProvider} from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import NotFoundPage from "./pages/NotFoundPage"
import JobPage, {jobLoader} from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"




const App = () => {
  
  // function that make the post request to add job
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
  
  // delele function
  const deleteJob = (id) => {
    console.log('delete', id);
  }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage addNewJob={(newJob)}/>} />
      <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  
  ))

  return <RouterProvider router={router} />
  
}

export default App
