import { useTheme } from "../hooks/ThemeContext"

export default function Information(parameters) {
  const { theme } = useTheme()

  return (
    <section className="w-full flex flex-col items-start gap-4 py-8">
      <span
        id="my-info"
        className="font-inter font-semibold text-2xl text-gray-200 hover:text-blue-300 hover:underline relative z-20"
      >
        # My Info
      </span>
      <article className="w-full flex flex-col items-center gap-4">
        <p
          className={`w-full font-inter font-medium text-base text-justify relative z-20 ${
            theme === "light"
              ? "text-gray-400"
              : "text-gray-500 hover:text-gray-400"
          }`}
        >
          Hello, my name is{" "}
          <strong
            title={`My real name`}
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            Vo Van Duy
          </strong>
          , you can call me{" "}
          <strong
            title={`My nick name`}
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            Daniel
          </strong>
          . I am {` `}
          <strong
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            a Web developer
          </strong>{" "}
          and graduated from HUFLIT University in Ho Chi Minh city, Vietnam. I
          hope to learn a lot of {` `}
          <strong
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            knowledge and experience
          </strong>{" "}
          from my seniors. I hope to have the{" "}
          <strong
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            opportunity
          </strong>{" "}
          to intern and work at your company.
        </p>
        <p
          className={`w-full font-inter font-medium text-base text-justify relative z-20 ${
            theme === "light"
              ? "text-gray-400"
              : "text-gray-500 hover:text-gray-400"
          }`}
        >
          My personality is quite{" "}
          <strong
            title="It's not that I'm shy talking in front of you. hmp!"
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            shy
          </strong>
          , I often feel{" "}
          <strong
            title="My heart beats fast when I talk to someone. Ahhh nervous!"
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            nervous
          </strong>{" "}
          in many situations because I am a bit introverted. But I am quite
          {` `}
          <strong
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            gentle
          </strong>{" "}
          and{" "}
          <strong
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            friendly
          </strong>
          . So once I get used to the job, I might talk a bit too much.
        </p>
        <p
          className={`w-full font-inter font-medium text-base text-justify relative z-20 ${
            theme === "light"
              ? "text-gray-400"
              : "text-gray-500 hover:text-gray-400"
          }`}
        >
          I don't have{" "}
          <strong
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            many hobbies
          </strong>
          . But there are a few that I really like to do in my free time.
          {` `}
          <strong
            title={`I'm not a real fan anime, but I like reading manga though`}
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            Manga
          </strong>{" "}
          - I really like reading manga.{" "}
          <strong
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            Watching Streamers
          </strong>{" "}
          - I'm a fan of vtuber.{" "}
          <strong
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            Listening to music
          </strong>{" "}
          - if it's catchy, I listen.{" "}
          <strong
            className={`${
              theme === "light"
                ? "text-blue-300 underline"
                : "text-gray-400 underline hover:text-blue-300"
            }`}
          >
            Singing
          </strong>{" "}
          - yes, I love singing but not before everyone.
        </p>
      </article>
    </section>
  )
}
