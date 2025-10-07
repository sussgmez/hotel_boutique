import axios from "axios";
import type { Room } from "../types";

export const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
        'Content-Type': 'application/json'
    }
})


export const getRooms = async (): Promise<Room[]> => {
    const { data } = await apiClient.get<Room[]>('/rooms?number=201');
    return data;
}