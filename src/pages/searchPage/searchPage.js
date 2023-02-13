import { useLocation } from "react-router-dom";

function searchPage() {
    
  const { search } = useLocation();

  return <div>searchPage</div>;
}

export default searchPage;
