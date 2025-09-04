import ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import "./style.css"
import HomePage from "./HomePage"
import "./style.css"
import { ThemeProvider } from "./hooks/ThemeContext"
import { FormProvider } from "./hooks/ToggleContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <ThemeProvider>
      <FormProvider>
        <HomePage />
      </FormProvider>
    </ThemeProvider>
  </StrictMode>
)
