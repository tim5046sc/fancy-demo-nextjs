import type { NextPage } from "next";
import { FAKE_TEASER_CARDS_DATASOURCE } from "../fakeData";
import {
  Hero,
  ImageLinkedList,
  LinkedList,
  Page,
  PageSection,
  Promo,
  Title,
} from "../components";
import { Box, Flex } from "@chakra-ui/react";
import TeaserCard from "../components/TeaserCard";

const Home: NextPage = () => {
  return (
    <Page>
      <PageSection fullWidth>
        <Box marginTop="-100px">
          <Hero />
        </Box>
      </PageSection>
      <PageSection>
        <Flex flexWrap="wrap" alignItems={"center"} py={{ base: 4, md: 6 }}>
          <Box flexBasis={{ base: "100%", md: "55%" }}>
            <Promo />
          </Box>
          <Box flexBasis={{ base: "100%", md: "45%" }}>
            <LinkedList />
          </Box>
        </Flex>
        <Title title="Most Popular Destinations" />
        <Flex flexWrap="wrap" justifyContent={'space-between'} py={{ base: 4, md: 6 }}>
          {FAKE_TEASER_CARDS_DATASOURCE.map((teaserCard, idx) => (
            <Box my={2} key={idx} marginLeft='auto' marginRight='auto'>
            <TeaserCard
              
              title={teaserCard.title}
              description={teaserCard.description}
              image={teaserCard.image}
            />
            </Box>
          ))}
        </Flex>
        <Box>
          <ImageLinkedList />
        </Box>
      </PageSection>
    </Page>
  );
};

export default Home;
