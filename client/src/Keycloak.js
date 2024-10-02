import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://localhost:8080/",
 realm: "myrealm",
 clientId: "React-login-app",
});

// const keycloak = new Keycloak({
//     url: "http://localhost:8080/",
//     realm: 'myrealm',
//     clientId: 'React-login-app'
// });

// try {
//     const authenticated = await keycloak.init();
//     console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
// } catch (error) {
//     console.error('Failed to initialize adapter:', error);
// }

export default keycloak;