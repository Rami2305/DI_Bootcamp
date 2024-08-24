import { useContext } from "react";
import { AppContext } from "./App";

const ShowCount = () => {
  const { count } = useContext(AppContext);

  return <>Count: {count}</>;
  
};
export default ShowCount;
