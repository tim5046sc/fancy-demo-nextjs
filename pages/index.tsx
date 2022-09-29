import type { NextPage } from "next";
import { Hero, LinkedList, Page, PageSection, Promo, Title } from "../components";
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
        <Flex flexWrap="wrap" alignItems={'center'} py={{base: 4, md: 6}}>
          <Box flexBasis={{ base: "100%", md: "55%" }}>
            <Promo />
          </Box>
          <Box flexBasis={{ base: "100%", md: "45%" }}>
            <LinkedList />
          </Box>
        </Flex>
        <Title title="Most Popular Destinations" />
      </PageSection>
    </Page>
  );
};

export default Home;
