import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../Redux/todoSlice";

const InputModal = ({ isOpen, onClose, todo }) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    completed: false,
  });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOpen) {
      setError(false);
    }
    if (onClose) {
      setInputValues({
        title: "",
        completed: false,
      });
    }
    if (todo) {
      setInputValues({
        title: todo.title,
        completed: todo.completed,
      });
    }
  }, [isOpen, onClose, todo]);

  const handleSubmit = () => {
    if (inputValues.title.trim() === "") {
      setError(true);
    } else {
      setError(false);
      if (todo) {
        dispatch(
          updateTodo({
            id: todo.id,
            title: inputValues.title,
            completed: inputValues.completed,
          })
        );
      } else {
        dispatch(addTodo(inputValues));
      }

      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isInvalid={error}>
            <FormLabel htmlFor="title">Task Name</FormLabel>
            <Input
              type="text"
              id="title"
              value={inputValues.title}
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  title: e.target.value,
                })
              }
              placeholder="Enter Task..."
            />
            {error && <FormErrorMessage>Title is required</FormErrorMessage>}
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Status</FormLabel>
            <Select
              value={inputValues.completed}
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  completed: e.target.value === "true",
                })
              }
            >
              <option value="false">Incomplete</option>
              <option value="true">Complete</option>
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const MemoizedInputModal = React.memo(InputModal);
export { MemoizedInputModal };
