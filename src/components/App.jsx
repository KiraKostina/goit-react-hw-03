import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import Description from '../components/Description/Description';
import Options from '../components/Options/Options';
import Feedback from '../components/Feedback/Feedback';
import Notification from '../components/Notification/Notification';

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem("my-feedbacks");
    return savedFeedbacks !== null ?
      JSON.parse(savedFeedbacks)
   : {
          good: 0,
          neutral: 0,
          bad: 0
        };
  });

  const { good, neutral, bad } = feedbacks;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const handleReset = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("my-feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification totalFeedback={totalFeedback} />
      )}
    </>
  );
}