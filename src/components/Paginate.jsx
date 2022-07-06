import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginate = ({pages, setCurrentPage}) => {

  const [activePage, setActivePage] = useState(1)

 
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => setActivePage(number)}>
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    setCurrentPage(activePage)
  }, [activePage, setCurrentPage])
  
  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default Paginate;
