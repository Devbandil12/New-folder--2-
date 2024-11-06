"use client";

import Questionpage from './_components/page';
import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';

import RecordAnswer from './_components/RecordAnswer';
import { Toaster } from '@/components/ui/sonner';

function StartPage() {
    const [interviewQuestion, setInterviewQuestion] = useState([]);
    const [active, setActive] = useState(0); // Start with the first question

    const data = useSelector((state) => state.interview.questionsAnswer);
    

    useEffect(() => {
        if (data && data.length > 0) {
            setInterviewQuestion(data[1]);
        }
    }, [data]);

    const handleQuestionClick = (index) => {
        setActive(index); // Set active question index when clicked
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
            <div className="border rounded-xl">
                <Questionpage 
                    mockQues={interviewQuestion} 
                    active={active} 
                    onQuestionClick={handleQuestionClick} // Pass click handler
                />
            </div>
            <div className="border rounded-xl bg-secondary">
                <Toaster variant="primary"/>
             <RecordAnswer questionForSubmission={interviewQuestion[active]?.question} active={active}/>
            </div>
        </div>
    );
}

export default StartPage;
