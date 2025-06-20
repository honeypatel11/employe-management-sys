import { useNavigate } from "react-router-dom"

const Employee = () => {
  const navigate = useNavigate();
  return (
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   <h1 className="text-4xl font-semibold text-teal-800 my-3">Employee Details...</h1>

    <div className="flex items-center justify-between">
                <button type="submit" onClick={() => navigate('./addemployee')}  className="text-white bg-gradient-to-r my-3 from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Employee</button>

              </div>
   </div>
  )
}

export default Employee