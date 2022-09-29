import { Button } from "@chakra-ui/react";

type PrimaryButtonProps = {
  label: string;
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <Button
      background={"linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%)"}
      borderRadius="100px"
      fontSize={14}
      padding="16px 24px"
      transition="0.25s all"
      _hover={{
        background: "linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%)",
        textDecoration: "underline",
      }}
      color='chakra-body-text'
    >
      {props.label}
    </Button>
  );
}
