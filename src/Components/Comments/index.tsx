import CreateCommentForm from "./CreateCommentForm";
import CommentList from "./List";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.tsx";
import {itemAPI} from "../../api/itemAPI.ts";
import IComment from "../../interfaces/IComment.ts";
import IItem from "../../interfaces/IItem.ts";


function Comments() {

  const dispatch = useDispatch<AppDispatch>();
  const selectedItem = useSelector((state: RootState) => state.items.selectedItem);
  const commentsFromSelectedItem = selectedItem?.comments || [];


  const handleSubmit = (text: string, color: string) => {
    if (!selectedItem) return;
    const newComment: IComment = {text, color, id: Math.floor(Math.random() * 100),};
    const updatedItem: IItem = {
      ...selectedItem,
      comments: [...(selectedItem?.comments || []), newComment]
    }
    dispatch(itemAPI.updateItem(updatedItem));
  }

  const handleDelete = (id: number) => {
    if (!selectedItem) return;
    const updatedItem: IItem = {
      ...selectedItem,
      comments: selectedItem.comments.filter(comment => comment.id !== id)
    }
    dispatch(itemAPI.updateItem(updatedItem));
  }
  return (
    <div className="wrapper-column">
      <h2>Comments to: {selectedItem ? selectedItem.id : ''}</h2>
      <CommentList comments={commentsFromSelectedItem} onDeleteComment={handleDelete}/>
      <CreateCommentForm onSubmit={handleSubmit} disabled={!selectedItem}/>
    </div>
  );
}

export default Comments;