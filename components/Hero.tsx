import Image from "next/future/image";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

import PrimaryButton from './PrimaryButton';
import { FAKE_HERO_DATASOURCE } from "../fakeData";


export default function Hero() {
  return (
    <Flex
      minHeight={{ base: "500px", md: "800"}}
      width="100%"
      position="relative"
      alignItems={"center"}
      px={{base: 8, md: 20}}
    >
      <Box color="white" maxWidth='600' pt={'100px'}>
        <Heading fontFamily='Lora serif' fontSize={{ base: 24, md: 62}}>{FAKE_HERO_DATASOURCE.title}</Heading>
        <Text fontSize='16' my={4} lineHeight='1.5'>{FAKE_HERO_DATASOURCE.subtitle}</Text>
        <PrimaryButton label='Our Destination' />
      </Box>
      <Image
        src={FAKE_HERO_DATASOURCE.image}
        alt="Play! Adventure"
        fill
        style={{ zIndex: "-1" }}
      />
    </Flex>
  );
}
