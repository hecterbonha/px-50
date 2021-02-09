import type { ReactNode } from "react";
import { styled } from "stitches.config";

interface TextProps {
  children: string | ReactNode;
}

export const HeadingOne = (props: TextProps) => {
  const Styled = styled("h1", {
    fontSize: "$6",
    fontFamily: "$sans",
    fontWeight: 1000,
    color: "$hiContrast",
  });
  return <Styled>{props.children}</Styled>;
};

export const HeadingTwo = (props: TextProps) => {
  const Styled = styled("h2", {
    fontSize: "$5",
    fontFamily: "$serif",
    fontWeight: 600,
    color: "$hiContrast",
  });
  return <Styled>{props.children}</Styled>;
};

export const HeadingThree = (props: TextProps) => {
  const Styled = styled("h3", {
    fontSize: "$4",
    fontFamily: "$sans",
    fontWeight: 800,
    color: "$hiContrast",
  });
  return <Styled>{props.children}</Styled>;
};

export const HeadingFour = (props: TextProps) => {
  const Styled = styled("h4", {
    fontSize: "$3",
    fontFamily: "$serif",
    fontWeight: 600,
    color: "$hiContrast",
  });
  return <Styled>{props.children}</Styled>;
};

export const Paragraph = (props: TextProps) => {
  const Styled = styled("p", {
    fontSize: "$2",
    fontFamily: "$sans",
    color: "$hiContrast",
  });
  return <Styled>{props.children}</Styled>;
};

export const Code = (props: TextProps) => {
  const Styled = styled("code", {
    fontSize: "$2",
    fontFamily: "$mono",
  });
  return (
    <pre>
      <Styled>{props.children}</Styled>
    </pre>
  );
};
