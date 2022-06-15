import { ChangeEvent, memo, FC, useState } from "react";
import H1 from "./H1";
import Button from "./Button";
import Input from "./Input";
import { connect } from "react-redux";
import { TODO_ADD } from "../actions/actions";
import { todoAddAction } from "../actions/actions";

type TodoFormProps = {
  onSubmit: (todoText: string) => void;
};

const TodoForm: FC<TodoFormProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  // const dispatch = useDispatch();

  const handleSubmit = () => {
    onSubmit(inputValue);
    // dispatch(todoAddAction(inputValue));
    setInputValue("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      setInputValue(event.target.value);
    }
  };

  function saveTodo() {
    // props.onCreate(inputValue);
    setInputValue("");
    // props.onClose();
  }

  return (
    <div className="shadow-lg">
      <H1> Create a ToDo </H1>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        class="p-2 m-8 w-96 border border-black "
        placeholder="eg. write a blog post for this week."
      />

      <div className="flex">
        <Button type="save" onClick={handleSubmit}>
          Save
        </Button>

        <Button type="cancel"> Cancel </Button>
      </div>
    </div>
  );
};

export default connect(undefined, { onSubmit: todoAddAction })(memo(TodoForm));
