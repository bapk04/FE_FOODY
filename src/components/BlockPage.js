import React, { useState } from 'react';

const CloudflareBlockPage = () => {
  const [showIP, setShowIP] = useState(false);
  const rayId = '9474c79c8dd5850b';
  const userIP = '2405:4802:71d3:3230:1516:c1f0:5e36:26b0';

  return (
    <div className="min-h-screen bg-white font-sans text-gray-700" style={{ fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Helvetica Neue,Arial,sans-serif' }}>
      {/* Cookie Alert */}
      <div className="bg-red-600 border border-red-900 text-white text-sm px-4 py-2 hidden">
        Please enable cookies.
      </div>

      <div className="w-full">
        {/* Header Section */}
        <div className="w-full max-w-5xl mx-auto px-4 pt-8 pb-4">
          <div className="text-left">
            <h1 className="text-4xl lg:text-6xl font-light mb-2 text-gray-700" style={{ fontWeight: 400 }}>
              Sorry, you have been blocked
            </h1>
            <h2 className="text-xl lg:text-2xl font-light text-gray-500 mb-8" style={{ fontWeight: 300 }}>
              <span>You are unable to access</span>{' '}
              <span className="font-normal text-gray-700">dotramtrungtruc.id.vn</span>
            </h2>
          </div>
        </div>

        {/* Screenshot Container - Full Width Gray Section */}
        <div className="w-full bg-gray-100 py-8 mb-8" style={{ 
          background: 'linear-gradient(to bottom, #dedede, #ebebeb 3%, #ebebeb 97%, #dedede)',
          borderTop: '1px solid #ddd',
          borderBottom: '1px solid #ddd'
        }}>
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-b from-gray-200 to-gray-100 rounded-t-lg border border-gray-300 max-w-4xl mx-auto relative overflow-hidden shadow-sm">
              {/* Browser Bar */}
              <div className="h-14 bg-gradient-to-b from-gray-240 to-gray-220 border-b border-gray-300 relative">
                <img 
                  src="https://dotramtrungtruc.id.vn/cdn-cgi/images/browser-bar.png?1376755637"
                  alt="Browser Bar"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Error Display */}
              <div className="h-80 flex items-center justify-center bg-white">
                <img 
                  src="https://dotramtrungtruc.id.vn/cdn-cgi/images/cf-no-screenshot-error.png"
                  alt="Cloudflare error screenshot"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections - Two Column Flex Layout */}
        <div className="w-full max-w-5xl mx-auto px-4 mb-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-light text-gray-700 mb-4" style={{ fontWeight: 400 }}>
                Why have I been blocked?
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                This website is using a security service to protect itself from online attacks. 
                The action you just performed triggered the security solution. There are several 
                actions that could trigger this block including submitting a certain word or phrase, 
                a SQL command or malformed data.
              </p>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-light text-gray-700 mb-4" style={{ fontWeight: 400 }}>
                What can I do to resolve this?
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                You can email the site owner to let them know you were blocked. Please include 
                what you were doing when this page came up and the Cloudflare Ray ID found at 
                the bottom of this page.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="inline-block">
                  Cloudflare Ray ID: <strong className="font-semibold">{rayId}</strong>
                </span>
                <span className="mx-2 hidden sm:inline">•</span>
                <br className="sm:hidden" />
                <span className="inline-block">
                  Your IP:{' '}
                  {showIP ? (
                    <span className="font-mono text-gray-700">{userIP}</span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowIP(true)}
                      className="text-blue-600 underline hover:text-orange-500 transition-colors duration-150 cursor-pointer bg-transparent border-none p-0 font-inherit"
                    >
                      Click to reveal
                    </button>
                  )}
                </span>
                <span className="mx-2 hidden sm:inline">•</span>
                <br className="sm:hidden" />
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
      </div>
    </div>
  );
};

export default CloudflareBlockPage;