import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import { Fragment } from "react";
import { Logo } from "src/components/design/branding";
import { Paragraph } from "src/components/design/type";
import { styled } from "stitches.config";

interface DesignProps {
  title: string;
  children: ReactNode;
}

export const DesignLayout = (props: DesignProps): ReactElement => {
  return (
    <Fragment>
      <Head>
        <title>{props.title} / Instead</title>
      </Head>
      <Nav>
        <Logo scale={0.4} />
        <div style={{ margin: "10px", height: "1px" }}></div>
        <Paragraph>Instead</Paragraph>
      </Nav>
      <Main>{props.children}</Main>
    </Fragment>
  );
};

const Nav = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0 $1",
  height: "$6",
  backgroundColor: "$loContrast",
  borderBottom: "1px solid $gray300",
});

const Main = styled("div", { padding: "$1" });
