import {IUserProfile} from "../user/user-profile";

interface IShortUser {
    id: number;
    username: string;
}

interface IAuthor {
    id: number;
    name: string;
    surname: string;
}

export interface IComment {
    id: number;
    content: string;
    user: string;
    date: string;
    poem_id: number;
}

interface IDisplayRate {
    rating: number;
    user: IUserProfile;
    poem: number;
    id: number;
}

export interface IPoem {
    id: number;
    title: string;
    description: string;
    content: string;
    rating: number;
    rating_count: number;
    rate_set: Array<IDisplayRate>;
    author: IAuthor;
    creation_time: string;
    modification_time: string;
    user: IShortUser;
    comments: Array<IComment>;
}
