import useSWR from "swr";

export default function Login() {
  const user = useSWR("/api/user");

  return (
    <>
      <button>hihi</button>
    </>
  );
}
