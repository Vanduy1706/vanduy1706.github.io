import { useEffect, useRef, useState } from "react"
import Information from "./components/Infomation"
import Skill from "./components/Skill"
import { useTheme } from "./hooks/ThemeContext"
import Project from "./components/Project"
import { useForm } from "./hooks/ToggleContext"
import ProjectInfo from "./components/ProjectInfo"
import FuturePlan from "./components/FuturePlan"

export default function HomePage() {
  const [coordinates, setCoordinates] = useState({ clientX: 0, clientY: 0 })
  const [hoverInbox, setHoverInbox] = useState(false)
  const [options, setOptions] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { form } = useForm()

  const diameter = useRef()
  diameter.current = 640
  const radius = diameter.current / 2

  function handleMouseMove(event) {
    setCoordinates({
      ...coordinates,
      clientX: event.pageX - radius,
      clientY: event.pageY - radius,
    })
  }

  function handleHoverInbox(e) {
    setHoverInbox(!hoverInbox)
  }

  function handleClickInfo(e) {
    setOptions(!options)
    if (!options) {
      setHoverInbox(false)
    }
  }

  return (
    <>
      <div
        className="w-full h-full px-8 overflow-hidden bg-gray-900 relative sm:px-32 md:px-48 lg:px-64 xl:px-72"
        onMouseMove={handleMouseMove}
      >
        {form === "projectForm" && <ProjectInfo />}
        <div
          style={{
            width: `${diameter.current}px`,
            height: `${diameter.current}px`,
            top: `${coordinates.clientY}px`,
            left: `${coordinates.clientX}px`,
          }}
          className={`absolute rounded-full bg-gray-200 opacity-5 blur-2xl z-10`}
        ></div>
        <div className="w-fit h-fit flex flex-col items-end m-6 gap-4 fixed z-50 bottom-0 right-0">
          <div
            onClick={handleHoverInbox}
            className={`w-fit h-fit flex flex-col items-center p-4 rounded bg-yellow-300 cursor-pointer ${
              options
                ? "transition ease-in-out duration-500 translate-x-0 opacity-100"
                : "transition ease-in-out duration-500 translate-x-60 opacity-0s"
            }`}
          >
            <div
              onClick={(e) => {
                e.stopPropagation()
              }}
              className={`w-fit h-fit p-4 flex flex-col gap-2 absolute -top-[108px] -left-[128px] bg-yellow-100 rounded ${
                hoverInbox
                  ? "transition ease-in-out duration-500 translate-x-0 opacity-100"
                  : "transition ease-in-out duration-500 translate-x-60 opacity-0"
              }`}
            >
              <p className="w-full flex gap-2 items-center font-inter font-semibold text-base text-yellow-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={`24px`}
                  height={`24px`}
                  fill="#854d0e"
                >
                  <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
                </svg>
                CONTACT
              </p>
              <a
                href="mailto:vvduy333@gmail.com"
                className="w-fit p-2 flex flex-wrap gap-2 items-center font-inter font-semibold text-base bg-yellow-800 text-yellow-100 rounded-md hover:underline"
              >
                vvduy333@gmail.com
              </a>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width={`24px`}
              height={`24px`}
              fill="#1c2331"
            >
              <path d="M155.8 96C123.9 96 96.9 119.4 92.4 150.9L64.6 345.2C64.2 348.2 64 351.2 64 354.3L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 354.3C576 351.3 575.8 348.2 575.4 345.2L547.6 150.9C543.1 119.4 516.1 96 484.2 96L155.8 96zM155.8 160L484.3 160L511.7 352L451.8 352C439.7 352 428.6 358.8 423.2 369.7L408.9 398.3C403.5 409.1 392.4 416 380.3 416L259.9 416C247.8 416 236.7 409.2 231.3 398.3L217 369.7C211.6 358.9 200.5 352 188.4 352L128.3 352L155.8 160z" />
            </svg>
            <p className="font-inter font-medium text-base text-gray-900">
              Inbox
            </p>
          </div>
          <div
            onClick={(e) => {
              toggleTheme()
            }}
            className={`w-fit h-fit p-4 rounded cursor-pointer ${
              theme === "light"
                ? "bg-gray-800 hover:bg-gray-700 border border-gray-600"
                : "bg-blue-200 hover:bg-blue-100"
            } ${
              options
                ? "transition ease-in-out duration-500 translate-x-0 opacity-100"
                : "transition ease-in-out duration-500 translate-x-60 opacity-0"
            }`}
          >
            <p
              className={`font-inter font-medium ${
                theme === "light" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              {theme === "light" ? "Dark" : "Highlight"}
            </p>
          </div>
          <div
            className={`w-fit h-fit p-4 rounded bg-red-200 ${
              options
                ? "transition ease-in-out duration-500 translate-x-0 opacity-100"
                : "transition ease-in-out duration-500 translate-x-60 opacity-0"
            }`}
          >
            <p className={`font-inter font-medium text-red-900`}>
              &copy; copyright 2025
            </p>
          </div>
          <div
            onClick={handleClickInfo}
            className={`w-fit h-fit rounded-full bg-blue-300 cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width={`40px`}
              height={`40px`}
            >
              <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z" />
            </svg>
          </div>
        </div>
        <Information />
        <Skill />
        <Project />
        <FuturePlan />
      </div>
    </>
  )
}
