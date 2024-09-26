# React app with Keycloak(single sign-on) in Docker


### Pull the Keycloak Docker Image
```bash
docker pull quay.io/keycloak/keycloak:latest
```

### Run the Keycloak Container
```bash
docker run -d -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:latest start-dev
```

Explanation:

* `-p 8080:8080`: Maps port 8080 of the container to port 8080 on your host machine.
* `-e KEYCLOAK_ADMIN=admin`: Sets the admin username to admin.
* `-e KEYCLOAK_ADMIN_PASSWORD=admin`: Sets the admin password to admin.
* `start-dev`: Runs Keycloak in development mode.

__Note__: Replace `admin` and `admin` with a secure username and password for production environments.

Verify Keycloak is Running
Open your browser and navigate to http://localhost:8080. You should see the Keycloak welcome page.

### Configure Keycloak

### Access the Keycloak Admin Console

1. Click on the Administration Console link on the welcome page.
2. Log in using the admin credentials you set (admin/admin).

### Create a Realm

1. In the top-left corner, click on the Master dropdown and select Create Realm.
2. Enter a name for your realm (e.g., myrealm).
3. Click Create.

### Create a Client

1. In your new realm, navigate to Clients in the left-hand menu.
2. Click on Create Client.
3. Enter the following details:
 * Client ID: my-react-app
 * Client Protocol: openid-connect

4. Click Next.
5. Configure the following settings:
 * Client Authentication: Off
 * Standard Flow: On
 * Valid Redirect URIs: http://localhost:3000/*
6. Click Save.

### Create a User

1. Navigate to Users in the left-hand menu.
2. Click on Add User.
3. Enter a username (e.g., testuser) and click Save.
4. Navigate to the Credentials tab for the user.
5. Set a password and toggle Temporary to Off.
6. Click Set __Password__.

# Integrate Keycloak with Your React App

### Update Keycloak Configuration in React

In your React application, update the Keycloak configuration to point to the Docker-hosted Keycloak server.

1. __Install Dependencies__

Ensure you have the necessary packages installed:

```bash
npm install keycloak-js @react-keycloak/web
```

2. Update `keycloak.js`

Create or update the `keycloak.js` file in your `src` directory:

```js
// src/keycloak.js

import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  realm: 'myrealm',
  clientId: 'my-react-app',
});

export default keycloak;
```


# Setup Client App with React.js

Create React app with Next.js 

```bash
npx create-next-app@latest
```

Add Keycloak to React app

```js
 npm install keycloak-js @react-keycloak/web
```

Create `keycloak.js` file in client app

```js
// src/keycloak.js

import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  realm: 'myrealm',
  clientId: 'my-react-app',
});

export default keycloak;
```

__Note__: Since Keycloak 17, the base path `/auth` has been removed. Ensure the `url` ends with a `/`.

Update `index.js` 


```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import keycloak from './keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

ReactDOM.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak}>
      <App />
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```
