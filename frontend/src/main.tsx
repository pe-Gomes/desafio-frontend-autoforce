import "./index.css"

import { createRoot } from "react-dom/client"
import { Header } from "@/components/header"
import { Footer } from "./components/footer"
import { Home } from "./pages/home"
import { Providers } from "./components/providers"

createRoot(document.getElementById("root")!).render(
  <Providers>
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-grow'>
        <Home />
      </main>
      <Footer />
    </div>
  </Providers>,
)
