import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Ansh Sengar. I am a Full-Stack Developer and a
          aspiring Devops Engineer
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/ANSHxTHAKUR/" target="black">
          <BsGithub />
        </a>

        <a href="https://www.instagram.com/_ansh_thakur__/" target="black">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/ansh-sengar-245b5b1a8/"
          target="black"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
