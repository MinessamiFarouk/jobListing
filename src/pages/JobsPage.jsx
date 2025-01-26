import JobsListing from "../components/JobsListing"

function JobsPage() {
  return (
    <section className="bg-teal-500 py-8 px-3">
      <JobsListing isHome={false}/>
    </section>
  )
}

export default JobsPage