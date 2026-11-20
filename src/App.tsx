import { AppBar } from "@/components/app-bar"
import { CarForm } from "@/components/car-form"
import { CartPanel } from "@/components/cart-panel"

export function App() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <AppBar />
      <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col lg:flex-row">
        <main className="flex-1 p-4 sm:p-6">
          <CarForm />
        </main>
        <CartPanel />
      </div>
    </div>
  )
}

export default App
