export const projects = [
  {
    id: 1,
    projectThumbnail: "/images/Thumnail - FORU.png",
    projectName: "FO-RU MEDIA",
    projectDes: (
      <>
        <strong className="text-gray-200">Project description:</strong> This is
        a personal project inspired by famous websites such as{" "}
        <strong className="text-blue-300 underline">Twitter(X)</strong>,
        Facebook,... This is the first self-made project (learning and applying
        at the same time). The{" "}
        <strong className="text-blue-300">technology</strong> applied to the
        project includes{" "}
        <strong className="bg-gradient-to-r from-blue-600 to-blue-400 text-gray-200 px-1 rounded-md">
          React/tailwind
        </strong>
        ,{" "}
        <strong className="bg-gradient-to-r from-red-700 to-green-600 text-gray-200 px-1 rounded-md">
          Express/Mongo
        </strong>
        ,{" "}
        <strong className="bg-gradient-to-r from-orange-600 to-orange-700 text-gray-200 px-1 rounded-md">
          Websocket
        </strong>
        . The features that can be done are:{" "}
        <strong className="text-blue-300 underline">Create</strong> Speech,
        {` `}
        <strong className="text-blue-300 underline">Update/Delete</strong>{" "}
        Speech, similar to Comment and Reply; in addition, there are also {``}
        <strong className="text-blue-300 underline">
          votes, republished, bookmarks
        </strong>
        , for{" "}
        <strong className="text-blue-300 underline">
          Speech/Comment/Reply
        </strong>
        ; There is also a{" "}
        <strong className="bg-cyan-700 px-1 text-gray-200 rounded-md">
          notification
        </strong>{" "}
        when the Speech owner votes/comments/republishes.
      </>
    ),
    link: {
      url: "https://foru-media-client.onrender.com/",
      title: "Visit FO-RU website here",
    },
    github: {
      fe: {
        url: "https://github.com/Vanduy1706/foru-media-client.git",
        title: "Visit source github client here",
      },
      be: {
        url: "https://github.com/Vanduy1706/foru-media-server.git",
        title: "Visit source github server here",
      },
    },
    deadline: "2 months (July 2025 - August 2025)",
  },
  {
    id: 2,
    projectThumbnail: "/images/Coming soon.png",
    projectName: "Coming soon...",
    projectDes: <>Coming soon...</>,
    link: {
      url: "#",
      title: "Coming soon",
    },
    github: {
      fe: {
        url: "#",
        title: "Coming soon",
      },
      be: {
        url: "#",
        title: "Coming soon",
      },
    },
    deadline: "...",
  },
]
