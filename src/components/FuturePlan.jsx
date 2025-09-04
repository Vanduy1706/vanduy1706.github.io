import { useTheme } from "../hooks/ThemeContext"

export default function FuturePlan() {
  const { theme } = useTheme()
  return (
    <section className="w-full flex flex-col items-start gap-6 py-8">
      <span
        id="my-skill"
        className="font-inter font-semibold text-2xl text-gray-200 hover:text-blue-300 hover:underline relative z-20"
      >
        # My Future Plans
      </span>
      <article className="w-full py-2 grid grid-cols-1 gap-8 xl:grid-cols-2">
        <div className="w-full h-fit flex flex-col gap-2 rounded-md p-4 shadow-lg shadow-blue-300">
          <p className="font-inter font-semibold text-xl text-gray-200">
            Become an Expert Web Developer
          </p>
          <p
            className={`font-inter font-normal text-base text-justify ${
              theme === "light" ? "text-blue-200" : "text-gray-500"
            }`}
          >
            I will delve into the field of web development. Add the necessary
            knowledge and experience during the working process. I have many
            projects I am planning to do. Try to complete within 5 years from
            the time of official employment at the company.
          </p>
        </div>
        <div className="w-full h-fit flex flex-col gap-2 rounded-md p-4 shadow-lg shadow-blue-300">
          <p className="font-inter font-semibold text-xl text-gray-200">
            Become an Expert Mobile Developer
          </p>
          <p
            className={`font-inter font-normal text-base text-justify ${
              theme === "light" ? "text-blue-200" : "text-gray-500"
            }`}
          >
            In addition to becoming a professional web developer. I also plan to
            expand into the field of mobile application development technology.
            To meet the increasing needs of smartphone users. Try to complete
            within 4 years from the time I become a professional web developer.
          </p>
        </div>
      </article>
    </section>
  )
}
