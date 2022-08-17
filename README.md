# Nextstrap

A simple project the way Badpirate likes it:

- Next JS
- Typescript
- Eslint (Airbnb)
- No forking semi-colons

## Hasura

This version specifically adds support for authenticated Streaming Hasura (GraphQL) database.  To setup you must do a few things:

1. Setup a new Hasura Server
2. In Hasura settings, upload the [schema](hasura_metadata.json)
3. Fill out the following env variables, in `.env.local` or similar
   
   ```
    NEXTAUTH_SECRET=iJqS6+ZfzQQ3s/fiFHd/9q98+JorNxWKN3N+IeqCksg=
    EMAIL_SERVER=smtp://user:pass@smtp.myemail.com:587
    EMAIL_FROM=host@myemail.com
    HASURA_SECRET=MyHasuraSecret
    NEXT_PUBLIC_HASURA_ENDPOINT=https://myhasurahost.com/v1/graphql
    NEXT_PUBLIC_HASURA_WS_ENDPOINT=wss://myhasurahost.com/v1/graphql
   ```


## Using

1. `git clone -b hasura git@github.com:BadPirate/nextstrap.git MyCoolNextProject`
2. Rename the project in `package.json`
3. `yarn dev`
4. Feel free to fork for your own project if want to make a quick web project based on the best setup for you

## Theme

Currently comes preinstalled with [Cyborg](https://bootswatch.com/cyborg/), but you can download any theme that you want to use or the default min theme.  Replacing the min'd css at `styles/bootstrap.min.css`