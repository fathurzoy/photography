import React from "react";

const Footer = () => {
  return (
    <div className="w-full mx-auto px-10 py-10 bg-gray-600">
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap text-gray-200">
          <div className="w-full sm:w-1/3 px-5 text-left mb-5">
            <h1 className="text-2xl mb-3 text-gray-200">About us</h1>
            <p className="text-sm text-gray-200">
              Alienco photography love to make other people happy about their
              moments and capturing moments in their life. We capture moments
              with pure honesty, true emotion and dedication capture the
              simplest form of all kinds of emotions we also keep our images and
              film natural and honest because honesty will last forever and
              become
            </p>
          </div>
          <div className="w-full sm:w-1/3 px-5 text-left mb-5">
            <h1 className="text-2xl mb-3 text-gray-200">Our mission</h1>
            <p className="text-sm text-gray-200">
              We communicate the story visually, finding something interesting
              in an ordinary place, seen through the artistic eye behind the
              camera lens, capturing your day as it unfolds & creating a truly
              memorable portraits & compelling images of the natural world.
            </p>
          </div>
          <div className="w-full sm:w-1/3 px-5 text-left mb-5">
            <h1 className="text-2xl mb-3 text-gray-200">Our offer</h1>
            <ul>
              <li className="flex ">
                <i className="fa fa-dot-circle-o mt-1 pr-2 "></i>
                <p className="text-sm text-gray-200">
                  Alienco Photography has been officially registered as PT.Satu
                  Wadah Kreasindo
                </p>
              </li>
              <li className="flex ">
                <i className="fa fa-dot-circle-o mt-1 pr-2"></i>
                <p className="text-sm text-gray-200">
                  Fully support and fast respond
                </p>
              </li>
              <li className="flex ">
                <i className="fa fa-dot-circle-o mt-1 pr-2"></i>
                <p className="text-sm text-gray-200">
                  experience since 2011 ALIENCO has served more than 500
                  couples.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
