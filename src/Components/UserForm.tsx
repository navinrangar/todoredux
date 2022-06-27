import { ChangeEvent, memo, FC, useState } from "react";
import H1 from "./H1";
import Button from "./Button";
import Input from "./Input";
import { connect } from "react-redux";
import { USER_ADD } from "../actions/users";
import { userAddAction } from "../actions/users";

type UserFormProps = {
  onSubmit: (fName: string, lName: string) => void;
};

const UserForm: FC<UserFormProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [lNameValue, setlNameValue] = useState("");

  // const dispatch = useDispatch();

  const handleSubmit = () => {
    onSubmit(inputValue, lNameValue);
    setInputValue("");
    setlNameValue("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handlelNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setlNameValue(event.target.value);
  };

  function saveUser() {
    // props.onCreate(inputValue);
    setInputValue("");
    // props.onClose();
  }

  return (
    <div className="shadow-lg flex flex-col">
      <H1> Create a User </H1>
      <div className="flex">
        <div className="flex flex-col space-y-2 m-3">
          <Input
            value={inputValue}
            onChange={handleInputChange}
            class=" w-48 border border-black "
            placeholder="first name"
          />

          <Input
            value={lNameValue}
            onChange={handlelNameChange}
            className="w-48 border border-black "
            placeholder="last name"
          />
        </div>
        <div className="flex">
          <Button type="save" onClick={handleSubmit}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default connect(undefined, { onSubmit: userAddAction })(memo(UserForm));
