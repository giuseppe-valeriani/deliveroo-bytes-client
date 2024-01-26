import "./WishList.scss";
import { useParams } from "react-router-dom";

const WishList = () => {
  const params = useParams();
  console.log(params);

  return <h1>{params.pageName} Wish List</h1>;
};

export default WishList;
