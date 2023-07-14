import { Card } from "../card/Card";
import "./ExpenseDate.css";
export default function ExpenseDate(props) {
  const month = props.dates.toLocaleString("en-US", { month: "long" });
  const year = props.dates.getFullYear();
  const day = props.dates.toLocaleString("en-US", { day: "2-digit" });
  return (
    <Card className="expense_whole_date colorCard">
      <div className="month_style">{month}</div>
      <div className="date_style">{day}</div>
      <div className="year_style">{year}</div>
    </Card>
  );
}
