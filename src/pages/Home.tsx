import RoomList from "../components/RoomList";

const Home = () => {

    return (
        <>
            <header className="bg-cyan-950 p-4">
                <a className="flex h-10" href="/">
                    <img src="public/logo-hotel-boutique.png" alt="" />
                </a>
            </header>
            <div className="py-8 px-4  max-w-sm m-auto sm:max-w-2xl lg:max-w-5xl xl:max-w-screen xl:p-8">
                <p className="text-2xl mb-3 font-semibold text-gray-800">Habitaciones</p>

                <RoomList />
            </div>
        </>
    )
}

export default Home;