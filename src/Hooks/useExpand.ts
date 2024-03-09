import { useState } from "react";

/**
 * A custom hook for managing expanded state.
 * @param {boolean} initialState - The initial state value. Default is false.
 * @returns {Object} An object containing the expanded state and a function to toggle it.
 */
const useExpanded = (initialState = false) => {
  const [expanded, setExpanded] = useState(initialState);

  /**
   * Toggle the expanded state.
   */
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return { expanded, toggleExpand };
};

export default useExpanded;
