// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiUrlBase: 'https://blogdemoapi.azurewebsites.net/api',
  urlBase: 'https://blogdemoapi.azurewebsites.net',
  openIdConnectSettings: {
    authority: 'https://blogauthserver.azurewebsites.net/',
    client_id: 'blog-client',
    redirect_uri: 'https://blogdemoclient.azurewebsites.net/signin-oidc',
    scope: 'openid profile email restapi',
    response_type: 'id_token token',
    post_logout_redirect_uri: 'https://blogdemoclient.azurewebsites.net/',
    automaticSilentRenew: true,
    silent_redirect_uri: 'https://blogdemoclient.azurewebsites.net/redirect-silentrenew'
}
};
/*
* For easier debugging in development mode, you can import the following file
* to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
*
* This import should be commented out in production mode because it will have a negative impact
* on performance if an error is thrown.
*/
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
