import { useState } from "react";
import type { Room } from "../types";
import RoomCard from "./RoomCard";
import RoomModal from "./RoomModal";
import { useRooms } from "../Context";


const RoomList = () => {

    const { rooms } = useRooms()

    const [filters, setFilters] = useState({
        number: "",
        room_type: 0,
    })

    const handleFiltersChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })
    }



    return (
        <div>

            <form className="flex gap-1">
                <input type="text" placeholder="Buscar habitación..." className="border border-gray-400 mb-2 p-2 text-sm font-medium rounded max-w-sm h-10" value={filters.number} onChange={handleFiltersChange} name="number" id="number" />
                <select name="room_type" id="room_type" value={filters.room_type} onChange={handleFiltersChange} className="border border-gray-400 mb-2 p-2 text-sm font-medium rounded max-w-sm h-10">
                    <option value="0">Todas las habitaciones</option>
                    <option value="1">Sencilla</option>
                    <option value="2">Doble</option>
                </select>
            </form>
            <div className="grid gap-0.5 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4">
                {rooms.map((room, key) => (
                    room.number.includes(filters.number) && (
                        filters.room_type == 0 ?
                            <RoomCard room={room} key={key} />
                            : room.room_type == filters.room_type &&
                            <RoomCard room={room} key={key} />
                    )
                ))}
            </div>

        </div>
    )
}

export default RoomList;