import { useSelector } from "react-redux";

const Display = () => {
  const user = useSelector((state) => state.user.comments);
  return (
    <div>
      {user.map((comment) => (
        <p>{comment}</p>
      ))}
    </div>
  );
};

export default Display;
