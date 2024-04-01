'use strict';
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

// Function to retrieve environment variables
module.exports = function (env) {
    console.log(process.env,'...............fomm env file');
    return process.env[env];
};
// const result={
//     "total": 8,
//     "p": 1,
//     "ps": 100,
//     "paging": {
//       "pageIndex": 1,
//       "pageSize": 100,
//       "total": 8
//     },
//     "effortTotal": 120,
//     "issues": [
//       {
//         "key": "01e6696f-57af-4778-bd6d-f4738dfeb4d2",
//         "rule": "secrets:S6702",
//         "severity": "BLOCKER",
//         "component": "sonarintegration:Dockerfile",
//         "project": "sonarintegration",
//         "line": 40,
//         "hash": "dfecfedc298d7f8cd3bf40c3f525d954",
//         "textRange": {
//           "startLine": 40,
//           "endLine": 40,
//           "startOffset": 26,
//           "endOffset": 70
//         },
//         "flows": [],
//         "status": "OPEN",
//         "message": "Make sure this SonarQube token gets revoked, changed, and removed from the code.",
//         "effort": "30min",
//         "debt": "30min",
//         "author": "",
//         "tags": [
//           "cwe"
//         ],
//         "creationDate": "2024-03-29T06:00:23+0000",
//         "updateDate": "2024-03-29T06:00:23+0000",
//         "type": "VULNERABILITY",
//         "scope": "MAIN",
//         "quickFixAvailable": false,
//         "messageFormattings": [],
//         "codeVariants": [],
//         "cleanCodeAttribute": "TRUSTWORTHY",
//         "cleanCodeAttributeCategory": "RESPONSIBLE",
//         "impacts": [
//           {
//             "softwareQuality": "SECURITY",
//             "severity": "HIGH"
//           }
//         ],
//         "issueStatus": "OPEN"
//       },
//       {
//         "key": "35798364-edae-4fba-ad46-b308bbfda584",
//         "rule": "docker:S6596",
//         "severity": "MAJOR",
//         "component": "sonarintegration:Dockerfile",
//         "project": "sonarintegration",
//         "line": 52,
//         "hash": "3b58875c8ede25f8f44668702543fed8",
//         "textRange": {
//           "startLine": 52,
//           "endLine": 52,
//           "startOffset": 5,
//           "endOffset": 16
//         },
//         "flows": [],
//         "status": "OPEN",
//         "message": "Use a specific version tag for the image.",
//         "effort": "5min",
//         "debt": "5min",
//         "author": "",
//         "tags": [],
//         "creationDate": "2024-03-29T06:00:23+0000",
//         "updateDate": "2024-03-29T06:00:23+0000",
//         "type": "CODE_SMELL",
//         "scope": "MAIN",
//         "quickFixAvailable": false,
//         "messageFormattings": [],
//         "codeVariants": [],
//         "cleanCodeAttribute": "LOGICAL",
//         "cleanCodeAttributeCategory": "INTENTIONAL",
//         "impacts": [
//           {
//             "softwareQuality": "MAINTAINABILITY",
//             "severity": "MEDIUM"
//           }
//         ],
//         "issueStatus": "OPEN"
//       },
//       {
//         "key": "9381b29c-834f-4f11-ae25-45467f9c3df4",
//         "rule": "secrets:S6702",
//         "severity": "BLOCKER",
//         "component": "sonarintegration:Dockerfile",
//         "project": "sonarintegration",
//         "line": 78,
//         "hash": "39850adf5c88594ab921b85ed9204790",
//         "textRange": {
//           "startLine": 78,
//           "endLine": 78,
//           "startOffset": 18,
//           "endOffset": 62
//         },
//         "flows": [],
//         "status": "OPEN",
//         "message": "Make sure this SonarQube token gets revoked, changed, and removed from the code.",
//         "effort": "30min",
//         "debt": "30min",
//         "author": "",
//         "tags": [
//           "cwe"
//         ],
//         "creationDate": "2024-03-29T06:00:23+0000",
//         "updateDate": "2024-03-29T06:00:23+0000",
//         "type": "VULNERABILITY",
//         "scope": "MAIN",
//         "quickFixAvailable": false,
//         "messageFormattings": [],
//         "codeVariants": [],
//         "cleanCodeAttribute": "TRUSTWORTHY",
//         "cleanCodeAttributeCategory": "RESPONSIBLE",
//         "impacts": [
//           {
//             "softwareQuality": "SECURITY",
//             "severity": "HIGH"
//           }
//         ],
//         "issueStatus": "OPEN"
//       },
//       {
//         "key": "8f6a51c3-9f76-4035-a85f-5cbbfae5cd5e",
//         "rule": "javascript:S125",
//         "severity": "MAJOR",
//         "component": "sonarintegration:index.js",
//         "project": "sonarintegration",
//         "line": 18,
//         "hash": "e2c09830e2ee78e1a8ac4e0e0e6a34e5",
//         "textRange": {
//           "startLine": 18,
//           "endLine": 26,
//           "startOffset": 0,
//           "endOffset": 5
//         },
//         "flows": [],
//         "status": "OPEN",
//         "message": "Remove this commented out code.",
//         "effort": "5min",
//         "debt": "5min",
//         "author": "",
//         "tags": [
//           "unused"
//         ],
//         "creationDate": "2024-03-29T06:00:23+0000",
//         "updateDate": "2024-03-29T06:00:23+0000",
//         "type": "CODE_SMELL",
//         "scope": "MAIN",
//         "quickFixAvailable": true,
//         "messageFormattings": [],
//         "codeVariants": [],
//         "cleanCodeAttribute": "CLEAR",
//         "cleanCodeAttributeCategory": "INTENTIONAL",
//         "impacts": [
//           {
//             "softwareQuality": "MAINTAINABILITY",
//             "severity": "MEDIUM"
//           }
//         ],
//         "issueStatus": "OPEN"
//       },
//       {
//         "key": "02b25736-801b-4d1c-b352-799db83eb4b2",
//         "rule": "javascript:S125",
//         "severity": "MAJOR",
//         "component": "sonarintegration:sonarqube.js",
//         "project": "sonarintegration",
//         "line": 5,
//         "hash": "efebb18faa919876e4a93de2626b45f6",
//         "textRange": {
//           "startLine": 5,
//           "endLine": 5,
//           "startOffset": 4,
//           "endOffset": 94
//         },
//         "flows": [],
//         "status": "OPEN",
//         "message": "Remove this commented out code.",
//         "effort": "5min",
//         "debt": "5min",
//         "author": "",
//         "tags": [
//           "unused"
//         ],
//         "creationDate": "2024-03-29T06:00:23+0000",
//         "updateDate": "2024-03-29T06:00:23+0000",
//         "type": "CODE_SMELL",
//         "scope": "MAIN",
//         "quickFixAvailable": true,
//         "messageFormattings": [],
//         "codeVariants": [],
//         "cleanCodeAttribute": "CLEAR",
//         "cleanCodeAttributeCategory": "INTENTIONAL",
//         "impacts": [
//           {
//             "softwareQuality": "MAINTAINABILITY",
//             "severity": "MEDIUM"
//           }
//         ],
//         "issueStatus": "OPEN"
//       },
//       {
//         "key": "0a35b0cd-6e67-450e-8f54-e82eef1e9a1e",
//         "rule": "secrets:S6702",
//         "severity": "BLOCKER",
//         "component": "sonarintegration:sonarqube.js",
//         "project": "sonarintegration",
//         "line": 7,
//         "hash": "55113c15324366a8c3f6468396417a29",
//         "textRange": {
//           "startLine": 7,
//           "endLine": 7,
//           "startOffset": 29,
//           "endOffset": 73
//         },
//         "flows": [],
//         "status": "OPEN",
//         "message": "Make sure this SonarQube token gets revoked, changed, and removed from the code.",
//         "effort": "30min",
//         "debt": "30min",
//         "author": "",
//         "tags": [
//           "cwe"
//         ],
//         "creationDate": "2024-03-29T06:00:23+0000",
//         "updateDate": "2024-03-29T06:00:23+0000",
//         "type": "VULNERABILITY",
//         "scope": "MAIN",
//         "quickFixAvailable": false,
//         "messageFormattings": [],
//         "codeVariants": [],
//         "cleanCodeAttribute": "TRUSTWORTHY",
//         "cleanCodeAttributeCategory": "RESPONSIBLE",
//         "impacts": [
//           {
//             "softwareQuality": "SECURITY",
//             "severity": "HIGH"
//           }
//         ],
//         "issueStatus": "OPEN"
//       },
//       {
//         "key": "bf903a4c-8752-490e-8527-8054b0608493",
//         "rule": "javascript:S125",
//         "severity": "MAJOR",
//         "component": "sonarintegration:sonarqube.js",
//         "project": "sonarintegration",
//         "line": 11,
//         "hash": "d8cca99b7b32abca1ec5da3deabe644a",
//         "textRange": {
//           "startLine": 11,
//           "endLine": 16,
//           "startOffset": 8,
//           "endOffset": 14
//         },
//         "flows": [],
//         "status": "OPEN",
//         "message": "Remove this commented out code.",
//         "effort": "5min",
//         "debt": "5min",
//         "author": "",
//         "tags": [
//           "unused"
//         ],
//         "creationDate": "2024-03-29T06:00:23+0000",
//         "updateDate": "2024-03-29T06:00:23+0000",
//         "type": "CODE_SMELL",
//         "scope": "MAIN",
//         "quickFixAvailable": true,
//         "messageFormattings": [],
//         "codeVariants": [],
//         "cleanCodeAttribute": "CLEAR",
//         "cleanCodeAttributeCategory": "INTENTIONAL",
//         "impacts": [
//           {
//             "softwareQuality": "MAINTAINABILITY",
//             "severity": "MEDIUM"
//           }
//         ],
//         "issueStatus": "OPEN"
//       },
//       {
//         "key": "eee8c4d7-2ffc-4e91-a069-fdc5d8cbbd07",
//         "rule": "javascript:S4624",
//         "severity": "MAJOR",
//         "component": "sonarintegration:sonarqube.js",
//         "project": "sonarintegration",
//         "line": 19,
//         "hash": "118607108e0a6e627c859f8c94ac0b37",
//         "textRange": {
//           "startLine": 19,
//           "endLine": 19,
//           "startOffset": 54,
//           "endOffset": 111
//         },
//         "flows": [],
//         "status": "OPEN",
//         "message": "Refactor this code to not use nested template literals.",
//         "effort": "10min",
//         "debt": "10min",
//         "author": "",
//         "tags": [
//           "brain-overload",
//           "confusing"
//         ],
//         "creationDate": "2024-03-29T06:00:23+0000",
//         "updateDate": "2024-03-29T06:00:23+0000",
//         "type": "CODE_SMELL",
//         "scope": "MAIN",
//         "quickFixAvailable": false,
//         "messageFormattings": [],
//         "codeVariants": [],
//         "cleanCodeAttribute": "CLEAR",
//         "cleanCodeAttributeCategory": "INTENTIONAL",
//         "impacts": [
//           {
//             "softwareQuality": "MAINTAINABILITY",
//             "severity": "MEDIUM"
//           }
//         ],
//         "issueStatus": "OPEN"
//       }
//     ],
//     "components": [
//       {
//         "key": "sonarintegration:index.js",
//         "enabled": true,
//         "qualifier": "FIL",
//         "name": "index.js",
//         "longName": "index.js",
//         "path": "index.js"
//       },
//       {
//         "key": "sonarintegration",
//         "enabled": true,
//         "qualifier": "TRK",
//         "name": "sonarintegration",
//         "longName": "sonarintegration"
//       },
//       {
//         "key": "sonarintegration:Dockerfile",
//         "enabled": true,
//         "qualifier": "FIL",
//         "name": "Dockerfile",
//         "longName": "Dockerfile",
//         "path": "Dockerfile"
//       },
//       {
//         "key": "sonarintegration:sonarqube.js",
//         "enabled": true,
//         "qualifier": "FIL",
//         "name": "sonarqube.js",
//         "longName": "sonarqube.js",
//         "path": "sonarqube.js"
//       }
//     ],
//     "facets": []
//   }