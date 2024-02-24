import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <div></div>
      <div className="bg-gray-100 rounded-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-16">
            <h2 className="text-4xl text-center font-bold text-gray-900">
              Our Services{" "}
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <Link to="/dashboard">
                <div className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://i.ibb.co/jD5rj6W/Hr.jpg"
                      alt=""
                      className="h-full w-full object-contain object-center"
                    />
                  </div>

                  <p className="my-2 text-xl font-semibold text-gray-900">
                    HR Software Solutions
                  </p>
                </div>
              </Link>
              <Link to="/dashboard">
                <div className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://i.ibb.co/4SkwdbM/job-instructions-15.jpg"
                      alt=""
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <p className="my-2 text-xl font-semibold text-gray-900">
                    Recruitment and Hiring Support
                  </p>
                </div>
              </Link>
              <Link to="/dashboard">
                <div className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://i.ibb.co/JQ9cTkH/time-management.jpg"
                      alt=""
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <p className="my-2 text-xl font-semibold text-gray-900">
                    Time and Attendance Tracking
                  </p>
                </div>
              </Link>
            </div>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <Link to="/dashboard">
                <div className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://i.ibb.co/bLVXprb/relations.jpg"
                      alt=""
                      className="h-full w-full object-contain object-center"
                    />
                  </div>

                  <p className="my-2 text-xl font-semibold text-gray-900">
                    Training and Development
                  </p>
                </div>
              </Link>
              <Link to="/dashboard">
                <div className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://i.ibb.co/sFWHfP4/mangement.jpg"
                      alt=""
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <p className="my-2 text-xl font-semibold text-gray-900">
                    Compliance Assistance
                  </p>
                </div>
              </Link>
              <Link to="/dashboard">
                <div className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://i.ibb.co/3hXyvTf/3992745.jpg"
                      alt=""
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <p className="my-2 text-xl font-semibold text-gray-900">
                    Payroll Management
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
