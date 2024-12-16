import teamMemberOne from "../../images/teamMemberOne.png";
import teamMemberTwo from "../../images/teamMembertwo.png";
import teamMemberThree from "../../images/teamMemberThree.png";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const ourTeamData = [
  {
    teamImg: teamMemberOne,
    teamName: "Lily Bicharm",
    teamRole: "Python Developer",
    teamDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque",
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
    teamName: "Jack Lordon",
    teamRole: "NodeJs Developer",
    teamDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque",
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
    teamName: "Dennis Albo",
    teamRole: "ReactJs Developer",
    teamDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque",
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
