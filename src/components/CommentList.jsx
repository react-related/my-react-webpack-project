import React from "react";
import CommentItem from "@/components/CommentItem";
import cssobj from "@/css/cmtlist.css";

export default class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className={cssobj.title}>这是评论列表组件</h1>
        {this.props.comments.map((item) => {
          return <CommentItem {...item} key={item.id}></CommentItem>;
        })}
      </div>
    );
  }
}
