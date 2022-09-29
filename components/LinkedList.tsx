import Image from "next/future/image";
import { Box, Flex, VStack, StackDivider, Text } from "@chakra-ui/react";
import { FAKE_LINKED_LIST_DATASOURCE } from "../fakeData";

export default function LinkedList() {
  return (
    <VStack 
    divider={<StackDivider borderColor='gray.200' />}
    alignItems={"start"} spacing={6}
    
    
    >
      {FAKE_LINKED_LIST_DATASOURCE.map((linkedListItem, idx) => (
        <Flex key={idx}>
          <Image
            src={linkedListItem.icon}
            width="90px"
            alt={`${linkedListItem.title}`}
          />
          <Box flexGrow="1" pl={4} maxWidth='375px'>
            <Text fontSize={24} fontWeight={600} lineHeight='28px'>{linkedListItem.title}</Text>
            <Text fontSize={20} pt={2} color='gray.500' lineHeight={'1.8'}>{linkedListItem.description}</Text>
          </Box>
        </Flex>
      ))}
    </VStack>
  );
}
