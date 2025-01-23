import { useLoaderData, Link } from "react-router-dom"
import { FaArrowLeft, FaMapMarker } from "react-icons/fa"
// import SpinnerLoader from "./SpinnerLoader"

const JobPage = () => {
    const job = useLoaderData()

    return (<>
        <section>
            <div class="container m-auto py-6 px-6">
                <Link
                to="/jobs"
                class="text-blue-600 hover:text-gray-600 flex items-center"
                >
                <FaArrowLeft className="mr-2" /> Back to Job Listings
                </Link>
            </div>
        </section>

        <section class="bg-teal-400">
            <div class="container m-auto py-10 px-6">
                <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <main>
                    <div
                    class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                    >
                        <div class="text-gray-500 mb-4">{job.type}</div>
                        <h1 class="text-3xl font-bold mb-4">
                            {job.title}
                        </h1>
                        <div
                            class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                        >
                            <FaMapMarker className="inline text-lg mb-1 mr-2" />
                            <p class="text-gray-600">{job.location}</p>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 class="text-gray-800 text-lg font-bold mb-6">
                        Job Description
                    </h3>

                    <p class="mb-4">
                        {job.description}
                    </p>

                    <h3 class="text-blue-600 text-lg font-bold mb-2">Salary</h3>

                    <p class="mb-4">{job.salary} / Year</p>
                    </div>
                </main>

                {/* <!-- Sidebar --> */}
                <aside>
                    {/* <!-- Company Info --> */}
                    <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-6">Company Info</h3>

                    <h2 class="text-2xl">{job.company.name}</h2>

                    <p class="my-2">
                        {job.company.description}
                    </p>

                    <hr class="my-4" />

                    <h3 class="text-xl">Contact Email:</h3>

                    <p class="my-2 bg-indigo-100 p-2 font-bold">
                        {job.company.contactEmail}
                    </p>

                    <h3 class="text-xl">Contact Phone:</h3>

                    <p class="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}</p>
                    </div>

                    {/* <!-- Manage --> */}
                    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 class="text-xl font-bold mb-6">Manage Job</h3>
                    <Link
                        to="/add-job.html"
                        class="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                        >Edit Job</Link
                    >
                    <button
                        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    >
                        Delete Job
                    </button>
                    </div>
                </aside>
                </div>
             </div>
        </section>
    </>)

}

const jobLoader = async ({params}) =>{
    const res = await fetch(`/api/jobs/${params.id}`)
    const data = res.json()
    return data
}

export {JobPage as default, jobLoader}