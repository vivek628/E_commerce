import React from 'react';

function MyAccount() {
  return (
    <div className="max-w-xs mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxIfmKqgOYD0vbLRidpoxNfaNEEHoiMR9jw&s"
          alt="Profile"
          className="w-full h-auto object-cover rounded-t-xl"
        />
        <div className="absolute bottom-4 left-20 text-white font-semibold text-xl">
          Full Stack Developer
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="text-lg font-medium text-gray-800">Name</div>
        <div className="text-sm  text-gray-600 ">vivek silori</div>
        <div className="text-lg font-medium text-gray-800">Email</div>
        <div className="text-sm text-gray-600">{`siloriv2@gmail.com`}</div>

      </div>
    </div>
  );
}

export default MyAccount;
