import React from "react";
import ReactDOM from "react-dom";
import CommentList from "@/components/CommentList";

const comments = [
  { id: 1, user: "AAA", content: "AAA~" },
  { id: 2, user: "BBB", content: "BBB~" },
  { id: 3, user: "CCC", content: "CCC~" },
  { id: 4, user: "DDD", content: "DDD~" },
];

const myh1 = (
  <div>
    <CommentList comments={comments}></CommentList>
  </div>
);

ReactDOM.render(myh1, document.getElementById("app"));
