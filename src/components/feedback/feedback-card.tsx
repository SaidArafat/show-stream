import { Feedback } from "@/types";
import React from "react";

interface Props {
  feedback: Feedback;
}

const FeedbackCard = ({ feedback }: Props) => {
  return (
    <div className="w-full overflow-hidden h-[26rem] rounded-lg bg-[#171616] flex flex-col items-center text-center justify-center p-5 space-y-8">
      <p className="before:content-[open-quote] after:content-[close-quote] before:text-primary after:text-primary">
        {feedback.message}
      </p>
      <img
        src={feedback.image}
        className="h-32 w-32 rounded-full object-cover"
        alt={feedback.title}
      />
      <div className="">
        <h1 className="font-medium text-lg">{feedback.title}</h1>
        <p>{feedback.job}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
