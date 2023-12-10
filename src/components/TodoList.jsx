import { useEffect, useState } from "react";
import { Checkbox, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, updateTodo } from "../Redux/todoSlice";
import ReactLoading from "react-loading";
import { MemoizedInputModal } from "./InputModal";
import { MemoizeDeleteModal } from "./DeleteModal";
import img from "../assets/loading-fail.png";

export const TodoList = () => {
  const dispatch = useDispatch();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const { data, filterState, status } = useSelector((state) => state);
  const reversedData = data.slice().reverse();

  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    const getData = localStorage.getItem("todo");
    if (!getData) {
      dispatch(fetchData());
    }
  }, []);

  const handleChecked = (id, title, completed) => {
    dispatch(updateTodo({ id, title, completed: !completed }));
  };

  const filteredData = reversedData.filter((todo) => {
    if (filterState === "all") {
      return true;
    } else if (filterState === "complete") {
      return todo.completed;
    } else {
      return !todo.completed;
    }
  });

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    onEditOpen();
  };

  const handleDelete = (id) => {
    setSelectedTodo(id);
    onDeleteOpen();
  };
  console.log(status);

  return (
    <>
      <div className="table-container">
        <div id="loading_container">
          {status == "loading" && (
            <ReactLoading type="bubbles" color="#6558f5" width="100px" />
          )}
          {status == "failed" && (
            <>
              <img src={img} alt="Loading failed....Try again" />
              <p style={{ fontWeight: "500", color: "crimson" }}>
                Something went wrong... Try again!
              </p>
            </>
          )}
        </div>

        <table>
          <tbody>
            {filteredData &&
              filteredData.map((e, i) => {
                return (
                  <tr key={i}>
                    <td
                      style={{
                        fontWeight: "500",
                        color: e.completed ? "gray" : "black",
                      }}
                    >
                      <Checkbox
                        colorScheme="green"
                        onChange={() => {
                          handleChecked(e.id, e.title, e.completed);
                        }}
                        isChecked={e.completed}
                      >
                        &nbsp;
                      </Checkbox>
                      {e.title}
                    </td>
                    <td>
                      <span
                        onClick={() => handleEdit(e)}
                        style={{ cursor: "pointer", color: "#145b26" }}
                        className="material-symbols-outlined"
                      >
                        edit_note
                      </span>
                      &nbsp; &nbsp;
                      <span
                        onClick={() => handleDelete(e.id)}
                        style={{ cursor: "pointer", color: "crimson" }}
                        className="material-symbols-outlined"
                      >
                        delete
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <MemoizedInputModal
        isOpen={isEditOpen}
        onClose={onEditClose}
        todo={selectedTodo}
      />
      <MemoizeDeleteModal
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        id={selectedTodo}
      />
    </>
  );
};
