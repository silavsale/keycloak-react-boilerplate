import { Box } from "@chakra-ui/react";
import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

//  return isLoggedIn ? children : null;
 return isLoggedIn ? children : <Box>You are not authenticated</Box>;
};

export default PrivateRoute;