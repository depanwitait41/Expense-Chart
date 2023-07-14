import "./AddButton.css";
import {Card} from "../card/Card"
export default function AddButton(props) {
  return (
      <div className="addButton"><Card className="addingButton">{props.children}</Card></div>
  );
}
