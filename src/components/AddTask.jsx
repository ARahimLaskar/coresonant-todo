import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../Redux/todoSlice";
import { MemoizedInputModal } from "./InputModal";

export const AddTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={onOpen} colorScheme="teal">
          Add Task &nbsp;<span className="material-symbols-outlined">add</span>{" "}
        </Button>
        <select
          onChange={handleFilter}
          style={{
            padding: "0 0.5em",
            border: "1px solid teal",
            borderRadius: "6px",
            outline: "none",
          }}
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <form>
        <MemoizedInputModal isOpen={isOpen} onClose={onClose} />
      </form>
    </>
  );
};

export default AddTask;
