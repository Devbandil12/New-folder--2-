"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import chatSession from "@/utils/GeminiAiModel";
import { LoaderCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddJobDetails,
  addQuestionAnswer,
} from "@/app/reduxProvider/interviewDetails";

function AddNewInterview() {
  const [isOpen, setIsOpen] = useState(false);
  const [jobRole, setJobRole] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExp, setJobExp] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const data = useSelector((s) => s.interview);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const prompt = `job role: ${jobRole}, job Description: ${jobDesc} and job experience: ${jobExp}, give me five questions and answers for this requirement, no need to write extra after writing questions and answers in JSON.`;

    const result = await chatSession.sendMessage(prompt);
    const questionArray = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    const questions = await JSON.parse(questionArray);

    // Dispatching actions to update state
    dispatch(AddJobDetails({ jobRole, jobDesc, jobExp }));
    dispatch(addQuestionAnswer(questions));

    setLoading(false);
    setIsOpen(false); // Close the dialog after submission
    // Redirect to dashboard
    window.location.href = "/interview";
  };

  return (
    <div>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="shadow-lg bg-secondary cursor-pointer hover:scale-105 transition-all border text-center py-14 border-gray-600 rounded font-bold"
      >
        <h1>+Add New</h1>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl bg-secondary text-gray-800">
          <DialogHeader>
            <DialogTitle>Enter your Details And Start Interview</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <label className="text-gray-900 text-lg">
                    Job Role/ Job Position
                  </label>
                  <Input
                    type="text"
                    placeholder="Ex. full stack"
                    required
                    onChange={(e) => setJobRole(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label className="text-gray-900 text-lg">
                    Job Description
                  </label>
                  <Textarea
                    placeholder="Ex. reactjs, nodejs, tailwind"
                    required
                    onChange={(e) => setJobDesc(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label className="text-gray-900 text-lg">
                    Year of Experience
                  </label>
                  <Input
                    placeholder="10 years"
                    type="number"
                    max="50"
                    required
                    onChange={(e) => setJobExp(e.target.value)}
                  />
                </div>
                <div className="flex gap-5 justify-end">
                  <Button onClick={() => setIsOpen(false)} variant="secondary">
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" /> Generating
                        from AI
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
