"use client";

import Webcamera from "@/components/ui/webcam";
import { Lightbulb } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";


function Interview() {
  const [webCamEnable, setWebCamenable] = useState(false);
  const data = useSelector((s) => s.interview.job);

  return (
    <div className="px-4 py-10">
      <h2 className="font-bold text-3xl text-center mb-10 md:text-4xl">Let's Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="flex flex-col gap-y-5">
          <div className="border rounded-lg border-gray-700 shadow-sm bg-secondary p-5">
            <h2><strong>Job Role/Position:</strong> {data.jobRole}</h2>
            <h2><strong>Job Description/Tech Stack:</strong> {data.jobDesc}</h2>
            <h2><strong>Experience:</strong> {data.jobExp}</h2>
          </div>

          <div className="border rounded-xl text-yellow-800 border-gray-700 shadow-sm bg-yellow-100 p-5">
            <div className="flex pb-3 items-center">
              <Lightbulb className="mr-2" /><strong>Information</strong>
            </div>
            <p><strong>Note:</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis natus deserunt architecto odio officia eaque, labore dolore beatae, magnam consectetur neque rem consequatur non mollitia? Aperiam eius beatae perferendis!</p>
          </div>
        </div>

        <div>
          <Webcamera/>
        </div>
      </div>
        
    </div>
  );
}

export default Interview;
