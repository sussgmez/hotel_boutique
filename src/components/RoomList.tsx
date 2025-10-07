import { useEffect, useState, type FormEvent } from "react";
import type { Room } from "../types";
import { getRooms } from "../api/service";
import RoomCard from "./RoomCard";

const RoomList = () => {
    const [rooms, setRooms] = useState<Room[]>([])

    const fetchRooms = async () => {
        try {
            const roomData = await getRooms()
            setRooms(roomData)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchRooms();
    }, [])

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log("test")
    }


    return (
        <div>
            <form onChange={handleSubmit}>
                <input type="text" placeholder="Buscar habitación..." className="border border-gray-400 mb-2 p-2 text-sm font-medium rounded w-full max-w-sm" />
            </form>
            <div className="grid gap-0.5 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4">
                {rooms.map((room, key) => (
                    <RoomCard room={room} key={key} />
                ))}
            </div>
        </div>
    )
}

export default RoomList;