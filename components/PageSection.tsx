import { Box } from "@chakra-ui/react";

type PageSectionProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
};

export default function PageSection(props: PageSectionProps) {
  if (props.fullWidth) {
    return <Box>{props.children}</Box>;
  }

  return (
    <Box maxWidth="1440px" margin="auto" py={{ base: 5, md: 8 }} px={{base: 5, md: 12}}>
      {props.children}
    </Box>
  );
}
