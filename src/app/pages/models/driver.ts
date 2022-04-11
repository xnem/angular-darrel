export interface Driver {
    id: number;
    name: string;
    surname: string;
    email: string;
    base_taxi_price: number;
    base_taxi_distance: number;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
}
