import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
//add deketeTascs
import { deleteTask, toggleCompleted } from "../../redux/operations";
//
import css from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  //add delete
  const handleDelete = () => dispatch(deleteTask(task.id));
  //add toggleComplete
  const handleToggle = () => dispatch(toggleCompleted(task));
  //

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
