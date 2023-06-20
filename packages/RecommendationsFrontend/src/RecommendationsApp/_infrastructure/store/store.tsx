import { atom, useAtom } from "jotai";

const testAtom = atom(false);
export const useTestAtom = () => useAtom(testAtom);
