import { navigate } from "gatsby-link";
import { useEffect } from "react";

const Default = () => {
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
};
export default Default;
