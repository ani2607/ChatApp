import { atom } from "recoil";

import { User } from "../../types/typeUtils";



export const userInfo = atom<User | null>({
    key : 'userInfo',
    default : null
})