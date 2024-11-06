import { WebcamIcon } from "lucide-react";
import Webcam from "react-webcam";
import React, { useState } from "react";
import { Button } from "./button";

function Webcamera() {
  const [webCamEnable, setWebCamenable] = useState(false);
  return (
    <div>
      <div className="flex flex-col items-center ">
        {webCamEnable ? (
          <Webcam
            onUserMedia={() => setWebCamenable(true)}
            onUserMediaError={() => setWebCamenable(false)}
            mirrored={true}
            className="border border-primary rounded-lg w-full max-w-xs"
          />
        ) : (
          <>
            <div className="bg-secondary p-12 px-40 rounded-lg border border-black mb-6 transition-transform transform hover:scale-105">
              <WebcamIcon className="w-32 h-32 text-gray-600" />
            </div>
            <Button variant="ghost" onClick={() => setWebCamenable(true)}>
              Use WebCam and Microphone
            </Button>

            <Button onClick={() => (window.location.href = "interview/start")}>
              {" "}
              start the interview
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Webcamera;
