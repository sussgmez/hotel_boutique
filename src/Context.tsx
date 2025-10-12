import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Room, PageContextType } from "./types";
import { getRooms } from "./api/service";

const initialContextValue: PageContextType = {
  rooms: []
}

export const Context = createContext<PageContextType>(
  initialContextValue
);

interface Props {
  children: ReactNode;
}

export const Provider = ({ children }: Props) => {
  const [rooms, setRooms] = useState<Room[]>([])

  const fetchRooms = async () => {
    const roomData = await getRooms();
    setRooms(roomData)
  }

  useEffect(() => {
    fetchRooms()
  }, [])

  const contextValue: PageContextType = {
    rooms
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export const useRooms = () => {
  const context = useContext(Context);

  return context
}