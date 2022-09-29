import type { NextPage } from "next";
import { Hero, LinkedList, Page, PageSection, Promo } from "../components";
import { Box, Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Page>
      <PageSection fullWidth>
        <Box marginTop="-100px">
          <Hero />
        </Box>
      </PageSection>
      <PageSection>
        <Flex flexWrap="wrap" alignItems={'center'}>
          <Box flexBasis={{ base: "100%", md: "55%" }}>
            <Promo />
          </Box>
          <Box flexBasis={{ base: "100%", md: "45%" }}>
            <LinkedList />
          </Box>
        </Flex>
      </PageSection>
    </Page>
  );
};

export default Home;
