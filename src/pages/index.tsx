import Head from "next/head";
// import { styled } from "stitches.config";
import { Fragment } from "react";
import { StitchesLogo } from "src/components/StitchesLogo";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <h1>Hello World!</h1>
      <StitchesLogo />
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
