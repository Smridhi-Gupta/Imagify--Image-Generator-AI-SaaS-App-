import React from "react";
import { stepsData } from '../assets/assets'
const Steps = () => {
  return (
    // assets.js se data
    <div>
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How it works</h1>
      <p className="tex-lg text-gray-600 mb-8">
        Transform Words Into Stunning Images
      </p>
      {/*  steps data  */}
      <div>
        {stepsData.map((item, index) => (
            <div></div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
