import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const NewsLetter = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden  py-16 sm:py-24 lg:py-32 rounded-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                Subscribe to our newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 ">
                Stay connected and never miss an update! Our newsletter is your
                go-to source for the latest news, updates, and exclusive offers.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0  px-3.5 py-2  shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn btn-outline ">
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md p-2 ring-1 ">
                  <CalendarDaysIcon className="h-6 w-6 " aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold ">Weekly articles</dt>
                <dd className="mt-2 leading-7">
                  Dive into our weekly articles where we explore the exciting
                  world of social event management.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md  p-2 ring-1 ">
                  <HandRaisedIcon className="h-6 w-6 " aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold ">No spam</dt>
                <dd className="mt-2 leading-7 ">
                  Enjoy a clutter-free inbox with our no-spam policy. We respect
                  your privacy and ensure that you only receive relevant and
                  valuable content from us.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
