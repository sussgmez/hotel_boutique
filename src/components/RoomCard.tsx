import type { Room } from "../types";


interface Props {
    room: Room;
    //setRoom: React.Dispatch<React.SetStateAction<Room | undefined>>;

}

const RoomCard = ({ room }: Props) => {


    let status_styles = "p-2 rounded-md border cursor-pointer shadow ";
    if (room.status == 1) {
        status_styles += "border-green-800/30 hover:border-green-800/50"
    }
    else if (room.status == 2) {
        status_styles += "border-amber-800/30 hover:border-amber-800/50"
    } else if (room.status == 3) {
        status_styles += "border-gray-800/20 hover:border-gray-800/40"
    }

    return (
        <div className={status_styles} >
            <p className="text-sm font-medium">{room.number} - {room.room_type_data.name}</p>
            <p className="text-sm">{room.status_display}</p>
            <p>-</p>
        </div>
    )

}


export default RoomCard;