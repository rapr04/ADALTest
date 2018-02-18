// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/*export const environment = {
  production: false,
  adalConfig: {
    tenant: '875b6873-1971-4899-a876-3b9086a6fe0f',
    clientId: 'c3d4a7f9-ca81-457a-a299-57823bf31679',
    postLogoutRedirectUri: 'http://localhost:4200/logout'
  },
};
*/
export const environment = {
  production: true,
  adalConfig: {
    tenant: '54e46239-7fe3-4abd-9efa-6028c2f5235a',
    clientId: 'b8820ef8-d8ac-499f-921c-9d9b3fe3d8ac',
    postLogoutRedirectUri: 'http://localhost:4200/logout'
  },
};
