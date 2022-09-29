import { Text } from "@chakra-ui/react";

type TitleProps = {
  title: string;
};

export default function Title(props: TitleProps) {
  return (
    <Text fontSize={48} fontWeight={700} lineHeight="1.3">
      {props.title}
    </Text>
  );
}
