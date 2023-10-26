import { Member } from "./member";

export interface Event {
    event_id: string;
    event_group: string;
    start_datetime: string;
    end_datetime: string;
    store_id: string;
    cage_id: string;
    member: Member;
    note: string;
}