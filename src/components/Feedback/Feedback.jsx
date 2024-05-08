import css from "./Feedback.module.css";

export default function Feedback({
  feedbacks: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <ul className={css.feedbacks_list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}% </li>
      </ul>
    </div>
  );
}
