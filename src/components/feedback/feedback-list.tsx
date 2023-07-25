"use client";
import { Feedback } from "@/types";
import feedbacks from "../../../data/feedbacks";
import Slider from "../ui/slider/slider";
import FeedbackCard from "./feedback-card";

const FeedbackList = () => {
  return (
    <div>
      <Slider<Feedback>
        slides={feedbacks}
        renderSlide={({ data }) => <FeedbackCard feedback={data} />}
      />
    </div>
  );
};

export default FeedbackList;
