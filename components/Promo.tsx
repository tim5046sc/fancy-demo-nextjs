import Image from "next/future/image";
import { Box, Text } from "@chakra-ui/react";

import { FAKE_PROMO_DATASOURCE } from "../fakeData";

export default function Promo() {
  return (
    <Box maxWidth="550px" px={4}>
      <Text fontSize={48} lineHeight="1.25" fontWeight="600" maxW={"400px"}>
        {FAKE_PROMO_DATASOURCE.title}
      </Text>
      <Text pt={4} pb={6} fontSize={20} color="gray.500">
        {FAKE_PROMO_DATASOURCE.description}
      </Text>
      <Box pr={10}>
        <Image src={FAKE_PROMO_DATASOURCE.image} alt={"Promo Image"} />
      </Box>
    </Box>
  );
}
