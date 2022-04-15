import useSWR from "swr";
import { useStore } from "../lib/zustandProvider";

export default function useLogin() {
  const setUser = useStore((state) => state.setUser);
}
