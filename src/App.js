
import Header from "./layout/Header";
import BucketList from "./components/BucketList";
import { BucketListProvider } from "./context/BucketListContext";

function App() {

  return (
    <BucketListProvider>
      <Header/>
      <main>
        <BucketList/>
      </main>
    </BucketListProvider>
  );
}

export default App;
