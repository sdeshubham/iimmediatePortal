import teamMemberOne from "../../images/teamMemberOne.jpg";
import teamMemberTwo from "../../images/teamMemberTwo.jpg";
import teamMemberThree from "../../images/teamMemberThree.png";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const ourTeamData = [
  {
    teamImg: teamMemberOne,
    teamName: "Shubham Kushwah",
    teamRole: "ReactJs Developer",
    teamDesc:
      "Experienced React.js developer specializing in creating dynamic, responsive web applications with seamless user experiences.",
    socialMedia: {
      facebook: <FaFacebookSquare />,
      linkedIn: <FaLinkedin />,
      instagram: <FaSquareInstagram />,
      twitter: <FaSquareXTwitter />,
      call: <IoCall />,
    },
  },
  {
    teamImg: teamMemberTwo,
    teamName: "Maya Prajapati",
    teamRole: "Backend Developer",
    teamDesc:
      "Proficient Node.js backend developer with expertise in building robust APIs and scalable server-side solutions.",
    socialMedia: {
      facebook: <FaFacebookSquare />,
      linkedIn: <FaLinkedin />,
      instagram: <FaSquareInstagram />,
      twitter: <FaSquareXTwitter />,
      call: <IoCall />,
    },
  },
  {
    teamImg: teamMemberThree,
    teamName: "Shivam Kumar",
    teamRole: "NodeJs Developer",
    teamDesc:
      "Skilled Node.js developer focused on building scalable, high-performance backend applications and APIs",
    socialMedia: {
      facebook: <FaFacebookSquare />,
      linkedIn: <FaLinkedin />,
      instagram: <FaSquareInstagram />,
      twitter: <FaSquareXTwitter />,
      call: <IoCall />,
    },
  },
];

export default ourTeamData;
