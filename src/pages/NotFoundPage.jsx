import { Link } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"

function NotFoundPage() {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-5xl font-bold mb-4">404 Error Page</h1>
      <p className="text-xl mb-4">This page does not exist.</p>
      <Link to="/" className="text-white bg-teal-500 rounded-md px-4 py-3 mt-3 hover:bg-blue-200">Go Back</Link>
    </section>
  )
}

export default NotFoundPage