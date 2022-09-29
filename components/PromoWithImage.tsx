import Image from "next/future/image";
import { Flex, Box, Show } from "@chakra-ui/react";

import Promo, { PromoProps } from "./Promo";
import fakePromo1 from "../assets/fakePromo1.png";

export default function PromoWithImage(props: PromoProps) {
  return (
    <Flex
      flexWrap="wrap"
      alignItems={"center"}
      justifyContent="center"
      py={{ base: 4, md: 6 }}
      maxWidth="1380px"
      margin="auto"
      px={4}
      position='relative'
    >
      <Flex flexBasis={{ base: "100%", md: "48%" }} py={4} margin='auto' justifyContent={'center'}>
        <Promo
          title={props.title}
          description={props.description}
          buttonText={props.buttonText}
          buttonPath={props.buttonPath}
        />
      </Flex>
      <Show above="md">
        <Flex flexBasis={{ base: "100%", md: "48%" }} justifyContent='center'>
          <Image src={fakePromo1} alt="Promotion" />
        </Flex>
      </Show>
    </Flex>
  );
}
