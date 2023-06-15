import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { IMeta } from "./meta.interface";

const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  keywords,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title} | Happy pet</title>
        {description ? (
          <meta name="description" content={description} />
        ) : (
          <meta name="description" content="" />
        )}
        {keywords ? (
          <meta
            name="keywords"
            content={
              "Happy pet, Хеппі пет, Хэппи пэт, Взяти тварину в сім'ю, Новий улюбленець, Притулок для тварин, Допомога тваринам, Приватний притулок, Take animal to the family, New friend, Shelter for animals, Help for animals, Private shelter, " +
              keywords
            }
          />
        ) : (
          <meta name="keywords" content="" />
        )}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};
export default Meta;
