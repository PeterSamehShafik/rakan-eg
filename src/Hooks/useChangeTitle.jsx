import { useEffect } from "react";

const useChangeTitle = (newTitle) => {
  useEffect(() => {
    document.title = `${newTitle} | RAKAN-EG`;
  }, [newTitle]);
};

export default useChangeTitle;
