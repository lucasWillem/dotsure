# Assessment

## Naming conventions

### Styling

Custom classes are prepended with:

- caa- : Stands for 'components app-agnostic' and it corresponds with the file structure
- cas- : Stands for 'components app-specific' and it corresponds with the file structure

## Dev setup

- Run npm install in the root of the project.
- Run migrations in order to build the database. I have added a script in the package.json file (db:migrate)
- Run npm run dev in order to start the application
- The .env file has been added to git ignore thus it won't be present on the repo, but I have added a .env.dev file for dev purposes
