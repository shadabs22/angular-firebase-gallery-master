// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCIjWze2FKjKEkQg31DVIOdp_qfyamo3aU',
    authDomain: 'ng-chat-demo.firebaseapp.com',
    databaseURL: 'https://ng-chat-demo.firebaseio.com',
    projectId: 'ng-chat-demo',
    storageBucket: 'ng-chat-demo.appspot.com',
    messagingSenderId: '692191043089'
  }
};
