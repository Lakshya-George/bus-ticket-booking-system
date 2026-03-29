import { useLocation } from "react-router-dom";

const Searchbus = () => {
  const location = useLocation();
  const { from, to, date } = location.state || {};

  return (
    <div>
      <h3>{from} → {to}</h3>
      <p>Date: {date}</p>
    </div>
  );
};

export default Searchbus;