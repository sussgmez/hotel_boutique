import type { Room } from "../types";

interface Props {
    room: Room;
    setRoom: React.Dispatch<React.SetStateAction<Room | undefined>>;
}

const RoomModal = ({ room, setRoom }: Props) => {
    return (
        <div>
            <p>{room.number}</p>
            <p onClick={() => setRoom(undefined)}>Cerrar</p>
        </div>
    )
}

export default RoomModal;