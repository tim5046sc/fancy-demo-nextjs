import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type PageProps = {
  children: React.ReactNode;
};
export default function Page(props: PageProps) {
  return (
    <Box>
      <Navbar />
      <main>
        <Box p={8}>{props.children}</Box>
      </main>
      <Footer />
    </Box>
  );
}
