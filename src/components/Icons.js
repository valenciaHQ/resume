import styled, { css } from "styled-components";
import {
  BsCodeSlash,
  BsPhone,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsStackOverflow,
  BsLinkedin,
  BsGithub,
  BsBriefcase,
} from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import { GiTimeTrap } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";

const Wrapper = styled.div`
  ${({ onClick }) =>
    onClick &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
`;

export const Code = ({ onClick, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <BsCodeSlash size={isDesktopOrLaptop && 40} />
  </Wrapper>
);

export const Copy = ({ onClick, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <BiCopy size={isDesktopOrLaptop && 40} />
  </Wrapper>
);

export const Age = ({ onClick, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <GiTimeTrap size={isDesktopOrLaptop && 40} />
  </Wrapper>
);

export const Phone = ({ onClick, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <BsPhone size={isDesktopOrLaptop && 40} />
  </Wrapper>
);

export const Email = ({ onClick, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <AiOutlineMail size={isDesktopOrLaptop && 40} />
  </Wrapper>
);

export const Twitter = ({ onClick, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <BsTwitter size={isDesktopOrLaptop && 32} />
  </Wrapper>
);

export const Instagram = ({ onClick, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <BsInstagram size={isDesktopOrLaptop && 32} />
  </Wrapper>
);

export const StackOverFlow = ({ onClick, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <BsStackOverflow size={isDesktopOrLaptop && 32} />
  </Wrapper>
);

export const Linkedln = ({ onClick, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <BsLinkedin size={isDesktopOrLaptop && 32} />
  </Wrapper>
);

export const GitHub = ({ onClick, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <BsGithub size={isDesktopOrLaptop && 32} />
  </Wrapper>
);

export const Briefcase = ({ onClick, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <BsBriefcase size={isDesktopOrLaptop && 40} />
  </Wrapper>
);

export const English = ({ onClick, disabled, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <input
      type="image"
      src="/icons/united-kingdom-flag.png"
      border="0"
      alt="english"
      style={disabled && { opacity: "0.2" }}
    />
  </Wrapper>
);

export const Spanish = ({ onClick, isDesktopOrLaptop }) => (
  <Wrapper onClick={onClick}>
    <input type="image" src="/icons/spain-flag.png" border="0" alt="spanish" />
  </Wrapper>
);
