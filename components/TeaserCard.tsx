import Image from "next/future/image";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

type TeaserCardProps = {
  title: string;
  description: string;
  image: any;
};

export default function TeaserCard(props: TeaserCardProps) {
  return (
    <Box
      boxShadow="2px 8px 8px 0 rgba(190,190,190,0.25)"
      minWidth="300px"
      maxWidth="400px"
      backgroundColor="blackAlpha.50"
      borderRadius={30}
      height={525}
    >
      <Image
        alt={props.title}
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        height={284}
        width="100%"
        src={props.image}
      />
      <Flex
        height={241}
        flexDirection="column"
        justifyContent={"space-between"} p={5}
      >
        <Box>
          <Text fontSize={24} fontWeight={700}>{props.title}</Text>
          <Text fontSize={18} lineHeight={'1.8'} color='gray.500'>{props.description}</Text>
        </Box>
        <Button
          colorScheme={"purple"}
          width="100%"
          fontWeight={400}
          borderRadius="45"
        >
          Learn more
        </Button>
      </Flex>
    </Box>
  );
}
