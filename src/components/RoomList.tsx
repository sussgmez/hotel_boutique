import { useEffect, useState } from "react";
import type { Room } from "../types";
import { getRooms } from "../api/service";
import RoomCard from "./RoomCard";
import RoomModal from "./RoomModal";

const RoomList = () => {
    const [rooms, setRooms] = useState<Room[]>([])
    const [roomNumber, setRoomNumber] = useState<string>("")
    const [room, setRoom] = useState<Room>()

    const fetchRooms = async () => {
        try {
            const roomData = await getRooms(roomNumber)
            setRooms(roomData)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchRooms();
    }, [roomNumber])

    return (
        <div>
            <form >
                <input type="text" placeholder="Buscar habitación..." className="border border-gray-400 mb-2 p-2 text-sm font-medium rounded w-full max-w-sm" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} />
            </form>
            <div className="grid gap-0.5 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4">
                {rooms.map((room, key) => (
                    <RoomCard room={room} key={key} setRoom={(setRoom)} />
                ))}
            </div>
            {room &&
                <div>
                    <RoomModal room={room} setRoom={setRoom} />
                </div>
            }
        </div>
    )   
}

export default RoomList;