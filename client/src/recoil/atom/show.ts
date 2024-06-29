import { atom } from "recoil";

import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const Open = atom<string>({
    key : 'Open',
    default : 'profile',
    effects_UNSTABLE : [persistAtom]
})