import { Link } from "react-router-dom";

const NotFoundPage = () => {
  console.log("Matched route for path:", window.location.pathname);

  return (
    <>
      <h1>404 not found</h1>
      <Link to="/">Home</Link>
    </>
  );
};
export default NotFoundPage;
