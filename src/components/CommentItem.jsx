import React from "react";
import cssobj from "@/css/cmtlist.css"; // 默认导入的样式是没有作用域的，是全局生效的

export default class CommentItem extends React.Component {
  render() {
    console.log(cssobj);
    return (
      <div className={cssobj.item}>
        <h3 className={cssobj.user}>评论人：{this.props.user}</h3>
        <p className={cssobj.content}>评论内容：{this.props.content}</p>
      </div>
    );
  }
}
