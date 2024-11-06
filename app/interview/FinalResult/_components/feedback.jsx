"use client";

import React from "react";
import { useSelector } from "react-redux";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDownIcon } from "lucide-react";

function Feedback() {
  const feedbackData = useSelector((s) => s.interview.feedback);
  console.log(feedbackData);

  return (
    feedbackData && (
      <>
        <div>
          <h2 className="text-green-400 font-extrabold hover:scale-105 transition-all  text-3xl">
            Congratulation!
          </h2>
          <h2 className="font-semibold">
            Your Overall Rating in The Interview is{" "}
            <strong className="text-primary">5/10</strong>
          </h2>
          <h3 className="text-primary font-light underline">
            Here is your Feedback
          </h3>
          {feedbackData.map((val) => (
            <>
              <Collapsible>
                <CollapsibleTrigger>
                  <div className="my-4 cursor-pointer">
                    <h2 className=" bg-secondary text-lg  rounded-lg flex text-left p-2">
                      Q. {val.question} <ChevronsUpDownIcon />
                    </h2>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div>
                    <h2 className="text-md flex justify-between px-2 items-center bg-red-300  rounded-sm p-1">
                      {"Your Answer: "}
                      {val.user_answer}{" "}
                      <strong className="text-sm">Rating:{val.rating}/5</strong>
                    </h2>
                    <h2 className="bg-green-100 text-sm text-center font-semibold rounded-lg ">
                      <strong className="text-md text-green-700">
                        Feedback:
                      </strong>
                      {val.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </>
          ))}
        </div>
      </>
    )
  );
}

export default Feedback;
