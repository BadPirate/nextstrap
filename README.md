# Nextstrap

A simple project the way Badpirate likes it:

- Next JS
- Typescript
- Eslint (Airbnb)
- No forking semi-colons

## Hasura

This version specifically adds support for authenticated Streaming Hasura (GraphQL) database.  


## Setup

### Git clone

1. `git clone -b hasura git@github.com:BadPirate/nextstrap.git MyCoolNextProject`
2. Rename the project in `package.json`

### Hasura Server

One way to go is to setup in https://cloud.hasura.io which has free level tiered instances.

1. Setup a new Project
2. Copy the endpoint (Thiss will be for NEXT_PUBLIC_HASURA_ENDPOINT and NEXT_PUBLIC_HASURA_WS_ENDPOINT)
3. Copy the HASURA_GRAPHQL_ADMIN_SECRET, this will be used for HASURA_SECRET
4. Generate a JWT Key `openssl rand -base64 32`
5. In the Env vars section of your project settings set HASURA_GRAPHQL_JWT_SECRET to `{"key":"<JWT_KEY>","type":"HS256"}`
6. Add a HASURA_GRAPHQL_UNAUTHORIZED_ROLE if you'd like to use it
7. Launch hasura console
8. Under Data -> Data Manager, connect a Database (you can use your own or a free neon DB)
9. Back in the cloud settings go to Env vars, and copy PG_DATABASE_URL as the connection string for psql dump
10. Download libpq if you don't have it (`brew install libpq` for macos)
11. Upload the database schema into the server `cat hasura_dump.psql > psql https://MY_PSQL_CONNECTION_STRING`
12. Hit the settings cog, and under Metadata Actions -> Import metadata upload [hasura_metadata.json]

### Local Env

1. Fill out the following env variables, in `.env.local` or similar
   
   ```
    NEXTAUTH_SECRET=GeneratedJWTKey
    EMAIL_SERVER=smtp://user:pass@smtp.myemail.com:587
    EMAIL_FROM=host@myemail.com
    HASURA_SECRET=MyHasuraSecret
    NEXT_PUBLIC_HASURA_ENDPOINT=https://myhasurahost.com/v1/graphql
    NEXT_PUBLIC_HASURA_WS_ENDPOINT=wss://myhasurahost.com/v1/graphql
   ```

### Using

* `yarn dev` to launch
* `yarn schema` to regenerate typescript schema for apollo after any query changes or addtions in public.graphql

## Theme

Currently comes preinstalled with [Cyborg](https://bootswatch.com/cyborg/), but you can download any theme that you want to use or the default min theme.  Replacing the min'd css at `styles/bootstrap.min.css`