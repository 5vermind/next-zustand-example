import { useHydrate } from "../lib/store";
import { StoreProvider } from "../lib/zustandProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useHydrate(pageProps.initialZustandState);
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
