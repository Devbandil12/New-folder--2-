import { Volume2 } from "lucide-react";
import React from "react";

function Questionpage({ mockQues, active, onQuestionClick }) {


  const Speach= (text)=>{
    if("speechSynthesis" in window){
      const speech=new window.SpeechSynthesisUtterance(text)
      window.speechSynthesis.speak(speech)

    }
    
  }
  return (
    <div className="p-5 sm:p-8 lg:p-10 rounded-lg m-3 sm:m-5">
      <div>
        {/* Grid container for questions with responsive column layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {mockQues.map((val, index) => (
            <h2
              key={index}
              onClick={() => onQuestionClick(index)} // Set active question on click
              className={`p-2 rounded-full text-center cursor-pointer border border-black text-xs sm:text-sm lg:text-base ${
                active === index ? "bg-primary text-white" : ""
              }`}
            >
              Question #{index + 1}
            </h2>
          ))}
        </div>

        {/* Display the currently active question */}
        <h2 className="text-xs sm:text-sm lg:text-base my-10">
          {mockQues[active]?.question}
        <Volume2 onClick={()=>Speach(mockQues[active]?.question)} className="  cursor-pointer hover:scale-105 bg-slate-200 rounded-full"/>
        </h2>
      </div>

      {/* Note section with responsive styling */}
      <div className="border bg-blue-200 rounded-lg text-blue-800 p-4 sm:p-5 text-xs sm:text-sm lg:text-base">
        <h3>
          <strong>NOTE:</strong> Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Qui commodi, et quo architecto atque ullam
          accusamus quaerat facere. Neque dicta modi mollitia veniam! Vero,
          autem! In culpa ipsa quod assumenda.
        </h3>
      </div>
    </div>
  );
}

export default Questionpage;
