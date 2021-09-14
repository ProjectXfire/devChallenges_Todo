import React from "react";
// Styles
import { Button, Input } from "../styles/shared";
import { NewItem as NewItemStyled } from "../styles/newItem";

export const NewItem = ({ value, setValue, addTask }) => {
  return (
    <NewItemStyled>
      <Input
        name="task"
        type="text "
        placeholder="add details"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="button" onClick={(e) => addTask(value)}>
        Add
      </Button>
    </NewItemStyled>
  );
};
