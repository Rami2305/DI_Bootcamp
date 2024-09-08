import { addreaction } from "./state/postsSlice";
import { useDispatch } from "react-redux";
import { memo } from "react";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

const ReactionsButton = ({post}) => {
    const dispatch = useDispatch()
    const { id, reactions} = post

    const renderReactions = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return(
            <button 
                key={name} 
                className='reactionButton' 
                onClick={()=> dispatch(addreaction({id, name}))}
            >
                {emoji} {reactions[name]}
            </button>
        );
    });
    return (
        <div>
            {renderReactions}
        </div>
    )
}

const MemoizedReactionsButton = memo(ReactionsButton) 
export default MemoizedReactionsButton