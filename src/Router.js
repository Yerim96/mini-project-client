import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Todo from "./pages/Todo";
import Todos from "./pages/Todos";
import TodoId from "./pages/TodoId";

const RouterData = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "", //모든 todo를 보여줌
        element: <Todos />, //home의 역할은 Todo, 메인 설정
        children: [
          {
            path: "todo",
            element: <Todo />,
          },
        ],
      },
    ],
  },
  //   {
  //     path: "/todo",
  //     element: <App />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Todo />,
  //       },
  //       {
  //         path: ":todoId",
  //         element: <TodoId />,
  //       },
  //     ],
  //   },
]);

export default RouterData;
