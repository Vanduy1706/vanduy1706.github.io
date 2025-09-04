import { Fragment } from "react/jsx-runtime"
import { useTheme } from "../hooks/ThemeContext"
import { projects } from "../utils/project"
import ProjectCard from "./ProjectCard"

export default function Project() {
  const { theme } = useTheme()

  return (
    <section className="w-full flex flex-col items-start gap-4 py-8">
      <span
        id="my-project"
        className="font-inter font-semibold text-2xl text-gray-200 hover:text-blue-300 hover:underline relative z-20"
      >
        # My Projects
      </span>
      <article className="w-full py-4 grid grid-cols-1 gap-8 xl:grid-cols-2">
        {projects.map((pj) => (
          <Fragment key={pj.id}>
            <ProjectCard project={pj} />
          </Fragment>
        ))}
      </article>
    </section>
  )
}
