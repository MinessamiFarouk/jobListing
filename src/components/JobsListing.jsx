import { useEffect, useState } from "react"
import JobListing from "./JobListing"
import SpinnerLoader from "./SpinnerLoader"

const JobsListing = ({isHome = true}) => {

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchJobs = async () =>{
      const urlApi = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try {
          const res = await fetch(urlApi)
          const data = await res.json()
          setJobs(data)
    } catch (error) {
        console.log("error fetching data", error);
        
    }finally{
      setLoading(false)
    }
  }
    fetchJobs()
  }, [])

    
  return (
    <section className="bg-teal-400 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
         {loading 
          ? <SpinnerLoader loading={loading} /> 
          :
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          }
      </div>
    </section>
  )
}

export default JobsListing