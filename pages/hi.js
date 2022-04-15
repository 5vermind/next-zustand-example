import { useStore } from "../lib/zustandProvider";

export default function Hi() {
  const user = useStore((state) => state.user);
  return <>{user?.name}</>;
}
