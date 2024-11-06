"use client";
import { addfeedback } from "@/app/reduxProvider/interviewDetails";
import { Button } from "@/components/ui/button";
import chatSession from "@/utils/GeminiAiModel";
import { Mic } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import { useDispatch } from "react-redux";

import Webcam from "react-webcam";
import { toast } from "sonner";

function RecordAnswer({ questionForSubmission, active }) {
  const [userAnswer, setUserAnswer] = useState("");

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    results.map((val) => setUserAnswer((pre) => (pre = val?.transcript)));
  }, [results]);

  const handleAnswer = () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };
  const savingAnswer = async () => {
    console.log(userAnswer.length);

    if (userAnswer?.length < 80) {
      console.log(userAnswer);

      toast("something went wrong");
      return;
    } else {
      const FeedbackPrompt =
        "question:" +
        questionForSubmission +
        ", user answer:" +
        userAnswer +
        "tell me the improvement area in user answer" +
        "give rating in 5 range and feedback in 3-5 lines" +
        "also add the field of question and userAnswer" +
        "all give in json ";

      const response = await chatSession.sendMessage(FeedbackPrompt);
      console.log(response);

      const feedback = response.response
        .text()
        .replace("```json", "")
        .replace("```", "");

      const jsonFeedback = JSON.parse(feedback);
      dispatch(addfeedback(jsonFeedback));
      console.log(userAnswer);

      toast("successfully recorded");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pb-10">
      {active == "4" && (
        <Button
          onClick={() => (window.location.href = "interview/FinalResult")}
        >
          End the Interview After Give the last answer
        </Button>
      )}
      <img
        src={"/webcam.svg"}
        alt=""
        height={200}
        width={200}
        className="absolute"
      />

      <Webcam mirrored style={{ height: 300, width: "100%", zIndex: 10 }} />
      <Button variant="outline" className="my-10" onClick={handleAnswer}>
        {isRecording ? (
          <h2 className="text-red-500">
            <Mic />
            Stop the recoring
          </h2>
        ) : (
          <>
            <h2>start the recording......</h2>
          </>
        )}
      </Button>
      <Button onClick={savingAnswer}>submit the asnwer</Button>
    </div>
  );
}

export default RecordAnswer;
