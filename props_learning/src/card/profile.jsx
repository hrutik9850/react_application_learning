import { useState } from 'react'

import viteLogo from '/vite.svg'

function ProfileCard({ name, role, image, bio, social }) {
  return (
    <div className="p-8 bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Profile Cards</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <div key={index} className="text-center p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <img
              src={image}
              className="rounded-full w-32 h-32 mb-4 mx-auto object-cover ring-4 ring-gray-200 dark:ring-zinc-700"
              alt={`${name} avatar`}
            />
            <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {name}
            </h5>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{role}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{bio}</p>
            <div className="flex justify-center gap-3">
              {Object.keys(social).map((platform) => (
                <a
                  key={platform}
                  href={profile.social[platform ]}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-blue-500 hover:text-white transition-colors duration-200"
                >
                  <span className="text-xs capitalize">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProfileCard;

// Example usage: