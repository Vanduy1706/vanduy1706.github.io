import { useTheme } from "../hooks/ThemeContext"

export default function Skill() {
  const { theme } = useTheme()

  return (
    <section className="w-full flex flex-col items-start gap-12 py-8">
      <span
        id="my-skill"
        className="font-inter font-semibold text-2xl text-gray-200 hover:text-blue-300 hover:underline relative z-20"
      >
        # My Skills
      </span>
      <article className="w-full flex flex-col gap-20 py-4 items-center relative z-20 xl:flex-row">
        <div
          style={{
            border: `${theme === "light" ? "8px solid #d1d5db" : ""}`,
          }}
          className="big-circle"
        >
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
              backgroundColor: `${theme === "light" ? "#f16a30" : ""}`,
            }}
            className="html-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-orange-900" : "text-gray-500"
              }`}
            >
              HTML
            </p>
          </div>
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
              backgroundColor: `${theme === "light" ? "#306af1" : ""}`,
            }}
            className="css-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-blue-200" : "text-gray-500"
              }`}
            >
              CSS
            </p>
          </div>
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
              backgroundColor: `${theme === "light" ? "#f0dc54" : ""}`,
            }}
            className="js-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-yellow-800" : "text-gray-500"
              }`}
            >
              JS
            </p>
          </div>
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
              backgroundColor: `${theme === "light" ? "#38bdf8" : ""}`,
            }}
            className="tailwind-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-blue-800" : "text-gray-500"
              }`}
            >
              Tailwind
            </p>
          </div>
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
              backgroundColor: `${theme === "light" ? "#58c4dc" : ""}`,
            }}
            className="react-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-cyan-800" : "text-gray-500"
              }`}
            >
              React
            </p>
          </div>
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
            }}
            className="next-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-gray-300" : "text-gray-500"
              }`}
            >
              ?
            </p>
          </div>
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
            }}
            className="fe-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-gray-300" : "text-gray-500"
              }`}
            >
              FE
            </p>
          </div>
        </div>
        <div
          style={{
            border: `${theme === "light" ? "8px solid #d1d5db" : ""}`,
          }}
          className="big-circle"
        >
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
              backgroundColor: `${theme === "light" ? "#7ab268" : ""}`,
            }}
            className="nodejs-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-green-800" : "text-gray-500"
              }`}
            >
              Nodejs
            </p>
          </div>
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
              backgroundColor: `${theme === "light" ? "#48994a" : ""}`,
            }}
            className="mongodb-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-green-200" : "text-gray-500"
              }`}
            >
              Mongo
            </p>
          </div>
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
              backgroundColor: `${theme === "light" ? "#d1d5db" : ""}`,
            }}
            className="express-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-red-800" : "text-gray-500"
              }`}
            >
              Express
            </p>
          </div>
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
            }}
            className="mssql-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-gray-300" : "text-gray-500"
              }`}
            >
              ?
            </p>
          </div>
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
            }}
            className="be-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-gray-300" : "text-gray-500"
              }`}
            >
              BE
            </p>
          </div>
        </div>
        <div
          style={{
            border: `${theme === "light" ? "8px solid #d1d5db" : ""}`,
          }}
          className="big-circle"
        >
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
              backgroundColor: `${theme === "light" ? "#f05033" : ""}`,
            }}
            className="git-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-orange-200" : "text-gray-500"
              }`}
            >
              Git
            </p>
          </div>
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
            }}
            className="devops-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-gray-300" : "text-gray-500"
              }`}
            >
              ?
            </p>
          </div>
          <div
            style={{
              border: `${theme === "light" ? "4px solid #d1d5db" : ""}`,
            }}
            className="other-circle"
          >
            <p
              className={`font-inter font-medium text-base ${
                theme === "light" ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Other
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
