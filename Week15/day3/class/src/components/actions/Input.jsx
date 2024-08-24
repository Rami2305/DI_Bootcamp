import { useContext } from "react";
import { AppContext } from "../../App";
const Input = (props) => {
  const { setText } = useContext(AppContext);
  return (
    <>
      <input onChange={(e) => setText((text) => e.target.value)} />
    </>
  );
};
export default Input;
