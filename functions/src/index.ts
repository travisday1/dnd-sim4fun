/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {setGlobalOptions} from "firebase-functions";
// The 'onRequest' and 'logger' imports are commented out because the
// 'helloWorld' function that uses them is currently commented out. If you
// uncomment 'helloWorld', you should uncomment these imports as well.
// import {onRequest} from "firebase-functions/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

setGlobalOptions({maxInstances: 10});

// export const helloWorld = onRequest((request, response) => {
//    logger.info("Hello logs!", {
//      structuredData: true,
//    });
//    response.send("Hello from Firebase!");
// });
