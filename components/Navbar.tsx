import {
  Box,
  Collapse,
  Flex,
  Stack,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
  Button,
  Show,
} from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import { FAKE_NAV_DATASOURCE } from "../fakeData";

interface NavItem {
  label: string;
  path?: string;
  children?: { [a: string]: NavItem[] }[];
  description?: string;
}

import Logo from "./Logo";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex py={8} px={20} alignItems={"center"}>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Logo />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex
          flex={{ base: 1, md: "auto" }}
          display={{ base: "flex", md: "none" }}
          justifyContent="flex-end"
        >
          <IconButton
            onClick={onToggle}
            color="white"
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Show above="md">
          <Button
            background={"linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%)"}
            borderRadius="100px"
            fontSize={14}
            padding="16px 24px"
            transition='0.25s all'
            _hover={{
              background: "linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%)",
              textDecoration: 'underline'
            }}
          >
            Book a trip now
          </Button>
        </Show>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} alignItems="center">
      {FAKE_NAV_DATASOURCE.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                key={navItem.path}
                href={navItem.path}
                color={"white"}
                textDecoration="none"
                transition="0.25s all"
                _hover={{
                  color: "orange.300",
                }}
              >
                <Flex alignItems="center" justifyContent={"space-between"}>
                  <Text>{navItem.label}</Text>
                  {navItem.children && <ChevronDownIcon ml={2} />}
                </Flex>
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                mt={6}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={8}
                rounded={"xl"}
                w={"100vw"}
              >
                {navItem.children && (
                  //@ts-ignore
                  <DesktopSubNav key={navItem.label} navItem={navItem} />
                )}
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

//@ts-ignore
const DesktopSubNav = ({ navItem }: NavItem) => {
  const [visibleSubnavItem, setVisibleSubnavItem] = useState(
    navItem?.children?.[0]
  );
  const visibleSubnavChildren = useMemo(
    () => visibleSubnavItem?.children,
    [visibleSubnavItem]
  );
  const subnavTitles = useMemo(() => {
    return navItem?.children?.map((child: NavItem) => ({
      label: child.label,
      isSelected: visibleSubnavItem?.label === child.label,
    }));
  }, [navItem, visibleSubnavItem]);

  return (
    <Flex width="100%">
      <Box width={"200px"} borderRight="2px solid #D9D9D9">
        <Text fontSize={16} fontWeight={600}>
          Destinations
        </Text>
        <VStack mt={6} alignItems="flex-start" spacing={4}>
          {subnavTitles.map((subnavTitle: any) => (
            <Link
              href="#"
              key={subnavTitle.label}
              fontWeight={subnavTitle.isSelected ? "600" : "500"}
              textDecoration={subnavTitle.isSelected ? "underline" : "none"}
              onMouseEnter={() =>
                setVisibleSubnavItem(
                  navItem?.children?.find(
                    (c: any) => c.label === subnavTitle.label
                  )
                )
              }
            >
              <Text fontSize={14}>{subnavTitle.label}</Text>
            </Link>
          ))}
        </VStack>
      </Box>
      <Flex
        flexGrow="1"
        flexWrap="wrap"
        justifyContent={"space-between"}
        px={8}
      >
        {visibleSubnavChildren?.map((child: any, idx: number) => (
          <Box flexBasis="32%" maxWidth="322px" key={idx} pb={4}>
            <Link href={child.path}>
              <Text fontSize={14} fontWeight={600}>
                {child.label}
              </Text>
              <Text pt={2} fontSize={14} lineHeight="1.75">
                {child.description}
              </Text>
            </Link>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {FAKE_NAV_DATASOURCE.map((navItem) => (
        //@ts-ignore
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, path }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    //@ts-ignore
    <Stack spacing={4} onClick={Boolean(children) ? onToggle : undefined}>
      <Flex
        py={2}
        as={Link}
        href={path ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children?.map((child: any) =>
            child.children?.map((grandChild: NavItem) => (
              <Link key={grandChild.label} py={2} href={grandChild.path}>
                {grandChild.label}
              </Link>
            ))
          )}
        </Stack>
      </Collapse>
    </Stack>
  );
};
