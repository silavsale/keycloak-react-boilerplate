import React from 'react';
import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaKey, FaLock, FaDatabase } from 'react-icons/fa';

const Home = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} py={10}>
      <Container maxW="container.lg">
        <Stack spacing={8} textAlign="center">
          {/* Page Title */}
          <Heading
            as="h1"
            size="2xl"
            color={useColorModeValue('teal.600', 'teal.300')}
          >
            Welcome to the Homepage
          </Heading>

          {/* Subtitle */}
          <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.200')}>
            Understanding Keycloak and JSON Web Tokens (JWT)
          </Text>

          {/* Guide Section */}
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            p={8}
            borderRadius="md"
            boxShadow="lg"
            textAlign="left"
          >
            {/* Introduction */}
            <Stack spacing={4}>
              <Heading as="h2" size="lg">
                Introduction to JWT
              </Heading>
              <Text fontSize="md">
                JSON Web Tokens (JWT) are an open, industry-standard method for
                securely transmitting information between parties as a JSON
                object. JWTs are compact, URL-safe tokens that can be used for
                authentication and information exchange.
              </Text>

              {/* How JWT Works */}
              <Heading as="h2" size="lg" mt={6}>
                How JWT Works
              </Heading>
              <Text fontSize="md">
                A JWT is composed of three parts: Header, Payload, and Signature.
                These components are encoded using Base64Url encoding and
                concatenated with dots.
              </Text>
              <Stack spacing={2} pl={4}>
                <Text>
                  <strong>Header:</strong> Specifies the type of token and the
                  hashing algorithm used.
                </Text>
                <Text>
                  <strong>Payload:</strong> Contains the claims or statements
                  about an entity (usually the user) and additional data.
                </Text>
                <Text>
                  <strong>Signature:</strong> Used to verify that the token
                  hasn't been altered.
                </Text>
              </Stack>

              {/* Keycloak and JWT */}
              <Heading as="h2" size="lg" mt={6}>
                Keycloak and JWT
              </Heading>
              <Text fontSize="md">
                Keycloak is an open-source identity and access management
                solution that issues JWTs for authentication and authorization.
                When a user logs in, Keycloak generates a JWT containing user
                information and permissions.
              </Text>
              <Text fontSize="md">
                Your application can use this token to authenticate requests and
                to retrieve user details without needing to query the Keycloak
                server repeatedly.
              </Text>

              {/* Where JWTs are Stored in the Browser */}
              <Heading as="h2" size="lg" mt={6}>
                Where Keycloak JWTs are Stored in the Browser
              </Heading>
              <Text fontSize="md">
                In a web application, the Keycloak JWT (access token) is typically
                stored in memory by the Keycloak JavaScript adapter. This means the
                token is held in a JavaScript variable and is not persisted across
                page reloads or browser sessions.
              </Text>
              <Text fontSize="md">
                However, depending on the configuration and your application's
                requirements, the token can also be stored in the browser's
                <strong> localStorage</strong> or <strong>sessionStorage</strong>.
                Storing tokens in <strong>localStorage</strong> allows them to
                persist across browser sessions, while <strong>sessionStorage</strong>
                retains them only for the duration of the page session.
              </Text>
              <Text fontSize="md" color="red.500">
                <strong>Security Considerations:</strong> Storing JWTs in
                <strong> localStorage</strong> or <strong>sessionStorage</strong>
                can expose your application to
                <strong> Cross-Site Scripting (XSS)</strong> attacks. It's
                recommended to store tokens in memory or use
                <strong> HTTP-only cookies</strong> for enhanced security.
              </Text>

              {/* Benefits */}
              <Heading as="h2" size="lg" mt={6}>
                Benefits of Using JWT with Keycloak
              </Heading>
              <Stack spacing={3} pl={4}>
                <Text>
                  <Icon as={FaKey} color="teal.500" mr={2} />
                  <strong>Stateless Authentication:</strong> Tokens are
                  self-contained, eliminating the need for server-side sessions.
                </Text>
                <Text>
                  <Icon as={FaLock} color="teal.500" mr={2} />
                  <strong>Security:</strong> JWTs can be signed and encrypted to
                  ensure data integrity and confidentiality.
                </Text>
                <Text>
                  <Icon as={FaDatabase} color="teal.500" mr={2} />
                  <strong>Scalability:</strong> Easy to scale across multiple
                  servers and services without sharing session state.
                </Text>
              </Stack>

              {/* Conclusion */}
              <Heading as="h2" size="lg" mt={6}>
                Conclusion
              </Heading>
              <Text fontSize="md">
                Integrating Keycloak with JWT in your application enhances
                security and simplifies authentication processes. It allows your
                application to verify the identity of users and securely exchange
                information.
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
