import { createContext, useState } from "react";
import type { ReactNode } from "react";

// Define the context type
interface MyContextType {
  value: any;
  setValue: (value: any) => void;
}

// 1. Create the context with a default value
export const MyContext = createContext<MyContextType>({
  value: {},
  setValue: () => {},
});

// 2. Create a provider component
interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [value, setValue] = useState({});

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
