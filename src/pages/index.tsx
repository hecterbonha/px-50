import Head from "next/head";
// import { styled } from "stitches.config";
import { Fragment } from "react";
import {
  Code,
  HeadingFour,
  HeadingOne,
  HeadingThree,
  HeadingTwo,
  Paragraph,
} from "src/components/design/type";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Malah Ngoding</title>
      </Head>
      <HeadingOne>Malah Ngoding</HeadingOne>
      <HeadingTwo>Malah Ngoding</HeadingTwo>
      <HeadingThree>Malah Ngoding</HeadingThree>
      <HeadingFour>Malah Ngoding</HeadingFour>
      <Paragraph>
        <b>Malah Ngoding</b> merupakan platform pembelajaran <b>praktis</b>{" "}
        untuk para pengembang aplikasi platform <i>web</i> dan <i>mobile</i>.{" "}
      </Paragraph>
      <Code>
        {`
<ul>
  <li>
    <span>List average</span>
      <span>61.7%</span>
  </li>
  <li>
      <span>Industry average</span>
      <span>61.7%</span>
  </li>
</ul>
        `}
      </Code>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
