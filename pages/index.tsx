import Image from "next/future/image";
import type { NextPage } from "next";
import {
  FAKE_TEASER_CARDS_DATASOURCE,
  FAKE_PROMO_DATASOURCE,
} from "../fakeData";
import {
  Hero,
  ImageLinkedList,
  LinkedList,
  Page,
  PageSection,
  Promo,
  PromoWithImage,
  Title,
} from "../components";
import { Box, Flex } from "@chakra-ui/react";
import TeaserCard from "../components/TeaserCard";
import promoBg from "../assets/promoBg.png";

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
            <Promo
              title={FAKE_PROMO_DATASOURCE.sampleOne.title}
              description={FAKE_PROMO_DATASOURCE.sampleOne.description}
              image={FAKE_PROMO_DATASOURCE.sampleOne.image}
            />
          </Box>
          <Box flexBasis={{ base: "100%", md: "45%" }}>
            <LinkedList />
          </Box>
        </Flex>
        <Title title="Most Popular Destinations" />
        <Flex
          flexWrap="wrap"
          justifyContent={"space-between"}
          py={{ base: 4, md: 6 }}
        >
          {FAKE_TEASER_CARDS_DATASOURCE.map((teaserCard, idx) => (
            <Box my={2} key={idx} marginLeft="auto" marginRight="auto">
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
      <PageSection fullWidth>
        <Box py={6} color='white'>
          <Image alt="Promotions" src={promoBg} fill />
          <PromoWithImage
            title={FAKE_PROMO_DATASOURCE.sampleTwo.title}
            description={FAKE_PROMO_DATASOURCE.sampleTwo.description}
            buttonPath={FAKE_PROMO_DATASOURCE.sampleTwo.buttonPath}
            buttonText={FAKE_PROMO_DATASOURCE.sampleTwo.buttonText}
          />
        </Box>
      </PageSection>
    </Page>
  );
};

export default Home;
