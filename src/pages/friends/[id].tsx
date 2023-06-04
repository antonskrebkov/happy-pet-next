import React from "react";
import Head from "next/head";
import Friend from "@/components/screens/friend/Friend";
import { useRouter } from "next/router";

export default function FriendPage() {
  const router = useRouter();
  const { id } = router.query;

  return <Friend id={id} />;
}
