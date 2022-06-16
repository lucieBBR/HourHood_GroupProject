import React from 'react';

export default function SelectedOfferCard() {
  return (
    // Code thanks to https://codepen.io/egoistdeveloper/pen/xxYrmgd
    <div className="grid mx-20 my-10">
      <div className="block w-full p-6 bg-white border rounded-lg lg:flex lg:flex-row lg:w-2/3 border-amber-200/80">
        <div className="relative">
          <img
            className="object-cover w-64 h-64"
            src="https://cdn.dribbble.com/users/5352839/screenshots/11892562/character.png"
            alt="User"
          />
        </div>

        <div className="flex flex-col px-6">
          <div className="flex flex-row h-8">
            <h2 className="mb-3 text-2xl font-medium title-font text-amber-900">
              Babysitting
            </h2>
          </div>

          <div className="flex flex-row my-2 space-x-2">
            <div className="flex flex-row">
              <svg
                className="w-4 h-6 mr-2 fill-amber-500/80"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
              </svg>

              <div className="text-s text-amber-400/80 hover:text-amber-400">
                Rachel
              </div>
            </div>

            <div className="flex flex-row">
              <svg
                className="w-4 h-6 mr-2 fill-amber-500/80"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
              </svg>

              <div className="text-s text-amber-400/80 hover:text-amber-400">
                Gracia
              </div>
            </div>
          </div>
          <div className="w-full p-5 mt-5 space-y-3 text-left rounded-lg justify bg-amber-200">
            <p className="leading-relaxed text-amber-500 ">
              "Only available in evenings Monday/Wednesday/Friday"
            </p>

            <p className="leading-relaxed text-amber-500 ">
              Date: 23/06/2022 17:00h
            </p>
          </div>
          <div className="flex flex-col items-start justify-end flex-grow pt-6 lg:pt-0 w-100">
            <div className="flex flex-row space-x-3">
              <button
                type="submit"
                className="px-4 py-2 font-semibold bg-transparent border rounded hover:bg-amber-500 text-amber-700 hover:text-white border-amber-500 hover:border-transparent"
              >
                Decline{' '}
              </button>{' '}
              <button
                type="button"
                className="px-4 py-2 font-semibold bg-transparent border rounded hover:bg-lime-600 text-lime-700 hover:text-white border-lime-600 hover:border-transparent"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}