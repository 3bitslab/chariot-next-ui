import { atom } from "jotai";
import { routing } from "@/i18n/routing";

export type Language = (typeof routing.locales)[number];

export const languageAtom = atom<Language>("en");
