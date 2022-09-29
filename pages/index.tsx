import type { NextPage } from "next";
import { Hero, Page, PageSection, Promo } from "../components";
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
        <Flex flexWrap="wrap">
          <Box flexBasis={{ base: "100%", md: "50%" }}>
            <Promo />
          </Box>
          <Box flexBasis={{ base: "100%", md: "50%" }}>
            <Promo />
          </Box>
        </Flex>
      </PageSection>
    </Page>
  );
};

export default Home;
