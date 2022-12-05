import Header from "./layout/Header";
import Footer from "./layout/Footer";
import BucketList from "./components/BucketList";
import { BucketListProvider } from "./context/BucketListContext";

function App() {
  
  return (
    <BucketListProvider>
      <Header />
      <main>
        <BucketList />
      </main>
      <Footer/>
    </BucketListProvider>
  );
}

export default App;
