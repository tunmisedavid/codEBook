import { useEffect } from "react";

const UseTitle = (title) => {
   useEffect(() => {
     document.title = `${title} - CodeBook`;
   }, [title]);

   return null;
}

export default UseTitle
