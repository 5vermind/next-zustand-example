import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { useStore } from "../lib/zustandProvider";

export default function Login() {
  const { data: user } = useSWR("/api/user", fetcher);
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    if (user) {
      console.log(user);
      setUser(user);
    }
  }, [setUser, user]);

  return (
    <>
      <Link href={"/hi"}>hihi</Link>
    </>
  );
}
