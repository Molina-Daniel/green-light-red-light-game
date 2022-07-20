// This hook checks wether the user is online or not, and returns a boolean.
// It uses React context to make the value accessible across the application
// and not duplicated each time we import our hook.

// Usage:
// 1. Wrap the component that is going to use the hook with <OnlineStatusProvider>.
// 2. Import OnlineStatusContext in any sub-component that is going to use the hook.

import React, { useState, useEffect, useContext } from "react";

const OnlineStatusContext = React.createContext(true);

export const OnlineStatusProvider = ({ children }) => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    return () => {
      window.removeEventListener("offline", () => {
        setOnlineStatus(false);
      });
      window.removeEventListener("online", () => {
        setOnlineStatus(true);
      });
    };
  }, []);

  return (
    <OnlineStatusContext.Provider value={onlineStatus}>
      {children}
    </OnlineStatusContext.Provider>
  );
};

export const useOnlineStatus = () => {
  const store = useContext(OnlineStatusContext);
  return store;
};
