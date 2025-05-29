import React, { useState } from 'react';

const CloudflareBlockPage = () => {
  const [showIP, setShowIP] = useState(false);
  const rayId = '9474c79c8dd5850b';
  const userIP = '2405:4802:71d3:3230:1516:c1f0:5e36:26b0';

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Cookie Alert */}
      <div className="bg-red-600 border border-red-900 text-white text-sm px-4 py-2 hidden">
        Please enable cookies.
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-normal mb-2 text-gray-800">
            Sorry, you have been blocked
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-gray-500">
            <span>You are unable to access</span>{' '}
            <span className="font-normal">dotramtrungtruc.id.vn</span>
          </h2>
        </div>

        {/* Screenshot Container */}
        <div className="bg-gradient-to-b from-gray-200 to-gray-100 rounded-t-lg border border-gray-300 max-w-4xl mx-auto mb-8 relative overflow-hidden">
          {/* Browser Bar */}
          <div className="h-14 bg-gradient-to-b from-gray-240 to-gray-220 border-b border-gray-300 relative">
            <img 
              src="https://dotramtrungtruc.id.vn/cdn-cgi/images/browser-bar.png?1376755637"
              alt="Browser Bar"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Error Display */}
          <div className="h-80 flex items-center justify-center bg-gray-50">
            <img 
              src="https://dotramtrungtruc.id.vn/cdn-cgi/images/cf-no-screenshot-error.png"
              alt="Cloudflare error screenshot"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-normal mb-4 text-gray-800">
              Why have I been blocked?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This website is using a security service to protect itself from online attacks. 
              The action you just performed triggered the security solution. There are several 
              actions that could trigger this block including submitting a certain word or phrase, 
              a SQL command or malformed data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-normal mb-4 text-gray-800">
              What can I do to resolve this?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You can email the site owner to let them know you were blocked. Please include 
              what you were doing when this page came up and the Cloudflare Ray ID found at 
              the bottom of this page.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-600">
            <span className="inline-block mb-1 md:mb-0">
              Cloudflare Ray ID: <strong className="font-semibold">{rayId}</strong>
            </span>
            <span className="hidden md:inline mx-2">•</span>
            <span className="inline-block mb-1 md:mb-0">
              Your IP:{' '}
              {showIP ? (
                <span className="font-mono">{userIP}</span>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowIP(true)}
                  className="text-blue-600 underline hover:text-orange-500 transition-colors duration-150 cursor-pointer"
                >
                  Click to reveal
                </button>
              )}
            </span>
            <span className="hidden md:inline mx-2">•</span>
            <span className="inline-block">
              <span>Performance & security by</span>{' '}
              <a
                href="https://www.cloudflare.com/5xx-error-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-orange-500 transition-colors duration-150 underline"
              >
                Cloudflare
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudflareBlockPage;