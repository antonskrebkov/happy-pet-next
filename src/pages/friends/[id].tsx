import { FC } from "react";
import Friend from "@/components/screens/friend/Friend";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { IFriend } from "@/interfaces/IFriend";
import axios from "axios";

interface FriendPageProps {
  friend: IFriend;
}

const FriendPage: FC<FriendPageProps> = ({ friend }) => {
  return <Friend friend={friend} />;
};

export async function getStaticPaths() {
  const friendsResponse = await axios.get(
    "https://64807757f061e6ec4d4954e4.mockapi.io/friends"
  );
  const friends = await friendsResponse.data;
  const paths = friends.map((friend: IFriend) => ({
    params: { id: friend.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({
  locale,
  params,
}: {
  locale: string;
  params: { id: string };
}) {
  const friendResponse = await axios.get(
    `https://64807757f061e6ec4d4954e4.mockapi.io/friends/${params.id}`
  );

  const friend = await friendResponse.data;

  return {
    props: {
      friend,
      ...(await serverSideTranslations(locale, ["friend", "layout"])),
    },
  };
}

export default FriendPage;
