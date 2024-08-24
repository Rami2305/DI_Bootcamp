import { useContext } from "react";
import { AppContext } from "../../App";

const ShowInput = (props) => {
  const { text } = useContext(AppContext);
  return <>{text}</>;
};
export default ShowInput;
