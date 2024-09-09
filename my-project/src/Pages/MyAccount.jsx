import React from 'react'

const MyAccount = () => {
  return (
    <div className="bg-gray-900 p-[100px]">
      <div className="container mx-auto my-[120px]">
        <div class="flex items-center justify-center">
          <div class="bg-gray-900 border-[4px] border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200">
            <div class="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col">
              <h1 class="text-white text-2xl">Login</h1>
              <p>Please login using account detail bellow.</p>
              <input
                class="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Email"
                type="email"
                name="email"
                id=""
              />
              <input
                class="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Password"
                type="password"
                name="password"
                id=""
              />
              <input
                class="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200"
                type="submit"
                id=""
              />
              <p>
                Don't have an account?
                <a
                  class="font-semibold text-white hover:text-blue-500 transition-all duration-200"
                  href=""
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount