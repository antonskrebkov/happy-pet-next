import { IDefaultOption } from "@/interfaces/IDefaultOption";

export const setLocaleOptions = (locales: string[] | undefined) => {
  const result: IDefaultOption[] = [];
  locales &&
    locales.map((locale) => {
      result.push({ value: locale, label: locale });
    });
  return result;
};
