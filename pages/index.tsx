import type { NextPage } from "next";
import { Hero, Page } from "../components";
import { Box } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Page>
      <Box position='absolute' top='0' right='0' left='0'>
        <Hero />
      </Box>
    </Page>
  );
};

export default Home;
