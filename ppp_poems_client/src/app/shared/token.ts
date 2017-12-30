export interface IToken {
    expires_in: number;
    token_type: string;
    refresh_token: string;
    scope: string;
    user: string;
    access_token: string;
}
