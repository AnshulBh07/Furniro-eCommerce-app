// we will use this file to create a custom pagination hook
// our hook will return a range of numbers inclusive that are to be displayed on the current page,
// for example if [1,9] is returned then it means we will display items from index 0 to 8 in our

import { useMemo } from "react";

// array , the values we will need are totalCount, currentPage, pageSize and sibling count

//this custom hook returns an array of numbers, remember that we will use this hook only to
//create our pagination pill component (the clickable bar at the bottom of items which will let
//us navigate and display more products)
export const usePagination = ({
  totalCount,
  pageSize,
  currentPage,
  siblings = 1,
}) => {
  // useMemo will memoize all the values that the function will return
  // paginationRange is an array
  const paginationRange = useMemo(() => {
    //step 1. calculate total number of pages
    const totalPages = Math.ceil(totalCount / pageSize);

    // method that returns an array from range [start,end]
    const range = (start, end) => {
      let ans = [];
      for (var i = start; i <= end; i++) {
        ans.push(i);
      }
      return ans;
    };

    //now at max we want to display 5 clickable buttons on a single page pill so
    if (totalPages <= 5) return range(1, totalPages);
    //else if the total pages is more than 5 we will have three possible states of our page pill UI
    //1. Dots are at the end just before final page, this means that we are somewhere between the first 4 pages
    //2. Dots are at the initial just after first page, this means we are somewhere between the last 5 pages
    //3. Dots are at both the ends which means that we aren't at either positions, this starts at page 5,
    //so now let's implement this logic
    else {
      if (currentPage >= 1 && currentPage < 5) {
        return [...range(1, 5), "...", totalPages];
      } else if (currentPage > totalPages - 5 && currentPage <= totalPages) {
        return [1, "...", ...range(totalPages - 4, totalPages)];
      } else {
        return [
          1,
          "...",
          ...range(currentPage - 1, currentPage + 1),
          "...",
          totalPages,
        ];
      }
    }
  }, [totalCount, pageSize, currentPage]);

  return paginationRange;
};
