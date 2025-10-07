export interface RoomType {
    id: number
    name: string
    price: number
}

export interface Reservation {
    id: number
    guest: number
    room: number
    checkin_date: Date
    checkout_date: Date
    active: boolean
}

export interface Room {
    id: number
    number: number
    room_type: number
    room_type_data: RoomType
    status: number
    status_display: string
    reservations: Reservation[]
    active_reservation: Reservation | undefined
}

