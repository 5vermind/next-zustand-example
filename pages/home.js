import Router from "next/router";
import { useEffect } from "react";
import { withAuth } from "../HoC/withAuth";
import { useStore } from "../lib/zustandProvider";

export default function Home({ user }) {
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    setUser(user);
  }, [user, setUser]);

  return (
    <>
      <button
        onClick={() => {
          Router.push("/hi");
        }}
      >
        hi
      </button>
    </>
  );
}

export const getServerSideProps = withAuth((context) => {
  return {
    props: {
      user: context.user,
    },
  };
});
