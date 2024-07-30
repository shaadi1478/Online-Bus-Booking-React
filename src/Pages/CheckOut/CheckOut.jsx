import { FaArrowRightLong } from "react-icons/fa6";

const CheckOut = () => {
  return (
    <div className="w-full  lg:ps-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-10">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-16 md:items-start w-full">
        <div className="col-span-3 space-y-7 pr-20">
          <h2 className="text-neutral-800 dark:text-neutral-100 font-medium ">
            passenger information
          </h2>
          <form className="space-y-6">
            <div className="">
              <label htmlFor="fullname" className="block mb-2 font-semibold ">
                Full Name
              </label>
              <input
                placeholder="e.g. SHEIKH SHAADI"
                type="text"
                id="fullname"
                name="fullname"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline focus:bg-neutral-100 dark:focus:bg-neutral-900 "
              />
            </div>
            <div className="">
              <label htmlFor="email" className="block mb-2 font-semibold ">
                Email Address.
              </label>
              <input
                placeholder="e.g. sheikhshaadi137@gmail.com"
                type="email"
                id="email"
                name="email"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline focus:bg-neutral-100 dark:focus:bg-neutral-900 "
              />
              <small className="block mt-1 text-xs text-neutral-500 dark:text-neutral-600 font-normal">
                You will get your tickets via this email address.
              </small>
            </div>
            <div className="">
              <label htmlFor="phone" className="block mb-2 font-semibold ">
                Phone Number.
              </label>
              <input
                placeholder="e.g. +880 1956686338"
                type="number"
                id="phone"
                name="phone"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline focus:bg-neutral-100 dark:focus:bg-neutral-900 "
              />
            </div>
            <div className="">
              <label htmlFor="altphone" className="block mb-2 font-semibold ">
                Alternative Phone Number.
              </label>
              <input
                placeholder="e.g. +880 1956686338"
                type="number"
                id="altphone"
                name="altphone"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline focus:bg-neutral-100 dark:focus:bg-neutral-900 "
              />
            </div>
          </form>
        </div>
        <div className="col-span-2 space-y-8">
          <div className="bg-neutral-200/50 dark:text-neutral-900/70 rounded-md py-5 px-7">
            <h2 className="text-neutral-800 text-center dark:text-neutral-100 font-medium border-b-2 border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
              Your Booking Status
            </h2>
            <div className="space-y-8 pb-3">
                <div className="space-y-4 text-neutral-900 dark:text-neutral-200">
                    <h6 className="text-basee text-neutral-700 dark:text-neutral-200 font-medium">
                        Your Destination
                    </h6>

                    <div className="w-full md:flex items-center gap-x-3 ">
                        <div className="w-fit text-base font-medium">
                            From:- <span className="ml-1.5">
                                Location 1
                            </span>
                        </div>
                        <div className="flex-1">
                            <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:text-neutral-700/80"></div>
                        </div>
                        <div className="w-fit text-base font-medium">
                            To:- <span className="ml-1.5">
                                Location 4
                            </span>
                        </div>
                    </div>

                    <div className="w-full md:flex items-center gap-x-3">
                        <div className="w-fit text-base font-medium">
                            Arrive at:- <span className="ml-1.5">
                                03:30 PM
                            </span>
                        </div>
                        <div className="flex-1">
                            <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:text-neutral-700/80"></div>
                        </div>
                        <div className="w-fit text-base font-medium">
                            Depart at:- <span className="ml-1.5">
                                04:00 PM
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="w-full md:flex items-center justify-between">
                            <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium ">
                                Total No. of Seats
                            </h6>
                            <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium ">
                                10 <span className="text-xs">
                                    (Driver side)
                                </span>
                            </h6>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="w-full flex items-center justify-between">
                            <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium ">
                                Total Amount
                            </h6>
                            <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium ">
                                USD 500$
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <button className="btn w-full px-8 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2">
            processed to Pay <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
