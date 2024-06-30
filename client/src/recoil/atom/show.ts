import { atom } from "recoil";

import { recoilPersist } from 'recoil-persist'
import { CurrentComponent } from "../../types/typeUtils";

const { persistAtom } = recoilPersist()

export const Open = atom<CurrentComponent | null>({
    key : 'Open',
    default : CurrentComponent.Home,
    effects_UNSTABLE : [persistAtom]
})