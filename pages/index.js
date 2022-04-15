import Home from "./home";
import { initializeStore } from "../lib/store";

export default function Index() {
  return <Home />;
}

export function getServerSideProps() {
  const zustandStore = initializeStore();

  return {
    props: { initializeStore: JSON.stringify(zustandStore.getState()) },
  };
}
