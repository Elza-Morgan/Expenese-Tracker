import "./Expensesitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItems(props) {
  return (
    <li>
    <Card className="expense-item">
      {/* slice is used to cut the time out and only have the date
            <div>{props.date.toISOString().slice(0,10)}</div>  */}

      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}
