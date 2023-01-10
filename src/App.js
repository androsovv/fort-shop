
import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Shop from "./Components/Shop";
import {ContextProvider} from "./context";

function App() {

  return (
    <div className="App">
        <>
            <Header />
            <ContextProvider>
                <Shop />
            </ContextProvider>
            <Footer />
        </>
    </div>
  );
}

export default App;
