import { useState } from "react";

function useHttp(whichType, url, applyData) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendRequest() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Request failed.");
      }

      const data = await response.json();

      applyData(data, whichType);
    } catch (error) {
      setError(error.message || "Something went wrong.");
    }
    setIsLoading(false);
  }

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
}

export default useHttp;
