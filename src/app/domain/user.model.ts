export interface User {
    id?: string;//由于新增的id是没有的，所以前面加一个?
    email: string;
    password: string;
    name: string;
    avatar: string;
}