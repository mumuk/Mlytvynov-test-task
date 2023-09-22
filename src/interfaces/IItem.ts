import IComment from "./IComment.ts";

interface IItem {
  id: number;
  name: string;
  comments:Array<IComment>
}

export default IItem;