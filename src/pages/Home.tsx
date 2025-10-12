import { useEffect, useState } from "react";
import RoomList from "../components/RoomList";
import type { Room } from "../types";
import { getRooms } from "../api/service";
import Modal from "../components/Modal";
import RoomForm from "../components/RoomForm";

const Home = () => {
  const [rooms, setRooms] = useState<Room[]>([])
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const fetchRooms = async () => {
    const roomData = await getRooms();
    setRooms(roomData)
  }

  useEffect(() => {
    fetchRooms()
  }, [])

  return (
    <>
      <header className="bg-cyan-950 p-4">
        <a className="flex h-10" href="/">
          <img src="public/logo-hotel-boutique.png" alt="" />
        </a>
      </header>
      <div className="py-8 px-4  max-w-sm m-auto sm:max-w-2xl lg:max-w-5xl xl:max-w-screen xl:p-8">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold text-gray-800">Habitaciones</p>
          <button className="text-sm p-2 bg-cyan-800 hover:bg-cyan-700 cursor-pointer text-white font-semibold rounded" onClick={() => setIsOpenModal(true)}>Añadir habitación + </button>
        </div>
        <RoomList />
      </div>

      {
        isOpenModal &&
        (
          <Modal>
            <RoomForm closeModal={() => setIsOpenModal(false)} fectRooms={fetchRooms} />
          </Modal>
        )
      }
    </>
  )
}

export default Home;