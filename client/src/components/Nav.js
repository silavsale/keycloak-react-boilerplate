import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  Link,
} from "@chakra-ui/react";

const Nav = () => {
  const { keycloak } = useKeycloak();

  return (
    <Box bg="gray.200" color="blue.800" w="100%" px={5} py={6}>
      <Flex alignItems="center" justifyContent="space-between" w="100%">
        <Text fontSize="xl" fontWeight="bold">
          Keycloak React AUTH.
        </Text>

        <HStack
          as="nav"
          spacing={5}
          mx="auto"
          fontWeight="semibold"
          display={{ base: "none", md: "flex" }}
        >
          <Link href="/" _hover={{ color: "blue.800" }}>
            Home
          </Link>
          <Link href="/secured" _hover={{ color: "blue.800" }}>
            Secured Page
          </Link>
        </HStack>

        <Box display={{ base: "none", xl: "flex" }} alignItems="center">
          {!keycloak.authenticated && (
            <Button
              variant="link"
              color="blue.800"
              onClick={() => keycloak.login()}
              _hover={{ color: "black.200" }}
            >
              Login
            </Button>
          )}
          {keycloak.authenticated && (
            <Button
              variant="link"
              color="blue.800"
              onClick={() => keycloak.logout()}
              _hover={{ color: "black.200" }}
            >
              Logout ({keycloak.tokenParsed?.preferred_username})
            </Button>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Nav;
