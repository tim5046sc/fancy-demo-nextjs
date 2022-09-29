import Image from "next/future/image";
import {
  Box,
  Flex,
  HStack,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

import { FAKE_FOOTER_DATASOURCE } from "../fakeData";

export default function Footer() {
  return (
    <Box p={{ base: "40px", md: "80px" }}>
      <Flex
        maxWidth="1380px"
        margin="auto"
        flexWrap="wrap"
        justifyContent={"space-between"}
        alignItems="flex-start"
      >
        <Box flexBasis={{ base: "100%", md: "40%" }}>
          <Image src={FAKE_FOOTER_DATASOURCE.logo} alt="Play Adventure" />
          <Text fontSize="16" color="gray.500" pt={3} lineHeight="1.75">
            {FAKE_FOOTER_DATASOURCE.description}
          </Text>
        </Box>
        <HStack
          flexBasis={{ base: "100%", md: "60%" }}
          spacing={{ base: 4, md: 20 }}
          justifyContent={{ base: "flex-start", md: "flex-end" }}
          pt={4}
        >
          {FAKE_FOOTER_DATASOURCE.sitemap.map((siteSection) => (
            <Box key={siteSection.label}>
              <Text fontWeight={700}>{siteSection.label}</Text>
              <List spacing={2} pt={2} fontSize={14}>
                {siteSection.children.map((subsection) => (
                  <ListItem key={subsection.label}>
                    <Link href={subsection.path}>{subsection.label}</Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </HStack>
        <Box pt={10}>
          <Text color="gray.500" fontSize={14}>
            Copyright © Play 2021
          </Text>
        </Box>
        <HStack pt={10} spacing={2} color="gray.500" fontSize={14}>
          <Link href="#">
            <Text>Terms & Conditions</Text>
          </Link>
          <Link href="#">
            <Text>Privacy Policy</Text>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
