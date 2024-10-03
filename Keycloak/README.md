### Use Docker compose file to run Keycloak with database to store data.

To run docker compose:

```js
docker-compose up -d
```


### To customize Keycloak login page

1. Open interactive shell sesssion inside running Docker container.

```bash
docker exec -it container-ID bin/bash
```

2. Add your Theme to folder `themes`

```bash
/opt/keycloak/themes/         
```

using this command 

```bash
docker cp path to your my-theme folder on local machine. container-ID:/opt/keycloak/themes/my-theme
```

3. Login to `Admin panel - Realm settings - Themes` and update selected page:

    * Login theme
    * Account theme
    * Admin theme
    * Email theme

