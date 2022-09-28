// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEndpoint: "http://localhost:3001/admin_dashboard",
  appUrl: "http://localhost:4201",
  grafanaEndPoint: "http://localhost:9000",
  keycloakUrl: "http://localhost:8080/auth",
  realm: "cQube",
  clientId: "cQube_Admin",
  storageType: "s3",
  report_viewer_config_otp: true,
  auth_api: "state"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
