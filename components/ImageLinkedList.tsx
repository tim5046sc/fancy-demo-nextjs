import Image from "next/future/image";
import { Flex, HStack, Link } from "@chakra-ui/react";
import { FAKE_IMAGE_LINKED_LIST_DATASOURCE } from "../fakeData";

export default function ImageLinkedList() {
  return (
    <HStack
      alignItems="center"
      spacing={{ base: 2, md: 8 }}
      flexWrap="wrap"
      maxWidth="100%"
      justifyContent={"center"}
      overflowX="auto"
      py={4}
    >
      {FAKE_IMAGE_LINKED_LIST_DATASOURCE.map((listItem, idx) => (
        <Link href={listItem.path} key={idx}>
          <Flex
            px={4}
            height={100}
            transition="0.25s all"
            _hover={{
              boxShadow: "md",
            }}
          >
            <Image src={listItem.image} alt="Logo" />
          </Flex>
        </Link>
      ))}
    </HStack>
  );
}
