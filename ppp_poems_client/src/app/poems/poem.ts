interface IShortUser {
    id: number;
    username: string;
}

export interface IPoem {
    id: number;
    title: string;
    description: string;
    content: string;
    rating: number;
    rating_count: number;
    author: number;
    creation_time: string;
    modification_time: string;
    user: IShortUser;
}
