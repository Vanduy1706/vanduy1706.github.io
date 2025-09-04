import { useForm, useProject } from "../hooks/ToggleContext"

export default function ProjectCard({ project }) {
  const { setForm } = useForm()
  const { setProject } = useProject()

  return (
    <div
      onClick={(e) => {
        setForm("projectForm")
        setProject(project)
      }}
      className="w-full p-2 flex flex-col gap-4 h-fit rounded-lg relative z-20 cursor-pointer hover:outline hover:outline-4 hover:outline-blue-300"
    >
      <img
        className="w-full rounded-lg"
        src={project.projectThumbnail}
        title="Thumbnail"
      />
      <p className="font-inter font-medium text-xl text-blue-200">
        {project.projectName}
      </p>
    </div>
  )
}
