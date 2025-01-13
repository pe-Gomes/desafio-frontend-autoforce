import "./index.css"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Header } from "@/components/header"
import { Footer } from "./components/footer"
import { Home } from "./pages/home"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-grow'>
        <Home />
      </main>
      <Footer />
    </div>
  </StrictMode>,
)
