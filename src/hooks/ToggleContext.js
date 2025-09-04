import { createContext, useContext, useState } from "react"

const ToggleFormContext = createContext()

const ProjectContext = createContext()

export function FormProvider({ children }) {
  const [form, setForm] = useState(null)
  const [project, setProject] = useState(null)

  return (
    <ToggleFormContext value={{ form, setForm }}>
      <ProjectContext value={{ project, setProject }}>
        {children}
      </ProjectContext>
    </ToggleFormContext>
  )
}

export function useForm() {
  return useContext(ToggleFormContext)
}

export function useProject() {
  return useContext(ProjectContext)
}
