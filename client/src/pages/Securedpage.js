// import React from 'react';


// const Secured = () => {

//  return (
//    <div>
//      <h1 className="text-black text-4xl">Welcome to the Protected Page.</h1>
//    </div>
//  );
// };

// export default Secured;

import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Flex,
  Avatar,
  Stack,
} from '@chakra-ui/react';

const Secured = () => {
  const { keycloak } = useKeycloak();

  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="container.md">
        <Heading as="h1" size="xl" mb={6} textAlign="center" color="teal.600">
          Welcome to the Protected Page
        </Heading>

        {keycloak.authenticated ? (
          <Box
            bg="white"
            p={8}
            borderRadius="md"
            boxShadow="lg"
            mt={6}
          >
            <Flex alignItems="center" mb={6}>
              <Avatar
                size="xl"
                name={keycloak.tokenParsed?.name}
                mr={6}
              />
              <VStack align="start">
                <Text fontSize="2xl" fontWeight="bold">
                  {keycloak.tokenParsed?.name || 'User'}
                </Text>
                <Text color="gray.500">{keycloak.tokenParsed?.email}</Text>
              </VStack>
            </Flex>
            <Stack spacing={4}>
              <Text fontSize="lg">
                <strong>User ID:</strong> {keycloak.tokenParsed?.sub}
              </Text>
              <Text fontSize="lg">
                <strong>Username:</strong> {keycloak.tokenParsed?.preferred_username}
              </Text>
              <Text fontSize="lg">
                <strong>Email:</strong> {keycloak.tokenParsed?.email}
              </Text>
              {/* Add more fields as needed */}
            </Stack>
          </Box>
        ) : (
          <Text fontSize="lg" color="red.500" textAlign="center">
            You are not authenticated. Please log in to view this page.
          </Text>
        )}
      </Container>
    </Box>
  );
};

export default Secured;
