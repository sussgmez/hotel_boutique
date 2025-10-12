import { useState } from "react";
import { createRoom } from "../api/service";

interface Props {
    closeModal: () => void;
    fectRooms: () => void;
}

const RoomForm = ({ closeModal, fectRooms }: Props) => {

    const [formData, setFormData] = useState({
        number: "",
        room_type: 1,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createRoom(formData).then(() => {
            fectRooms()
        })
        closeModal()
    }

    return (
        <div>
            <button onClick={closeModal}>x</button>
            <form onSubmit={handleSubmit}>
                <input type="text" name="number" value={formData.number} onChange={handleChange} />
                <select name="room_type" id="room_type" value={formData.room_type} onChange={handleChange} >
                    <option value="1">Sencilla</option>
                    <option value="2">Doble</option>
                </select>
                <button>Crear</button>
            </form>
        </div>
    )

}

export default RoomForm;