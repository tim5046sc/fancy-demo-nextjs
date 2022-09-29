import Image from "next/future/image";
import { Box, Text } from "@chakra-ui/react";
import PrimaryButton from './PrimaryButton';

export type PromoProps = {
  title: string;
  description: string;
  image?: any;
  buttonText?: string;
  buttonPath?: string;
};

export default function Promo(props: PromoProps) {
  return (
    <Box maxWidth="550px" px={4}>
      <Text fontSize={48} lineHeight="1.25" fontWeight="600" maxW={"400px"}>
        {props.title}
      </Text>
      <Text pt={4} pb={6} fontSize={20} color="gray.500">
        {props.description}
      </Text>
      {props.image && (
        <Box pr={10}>
          <Image src={props.image} alt={"Promo Image"} />
        </Box>
      )}
      {props.buttonText && (
        <PrimaryButton label='Contact Now'/>
      )}
    </Box>
  );
}
