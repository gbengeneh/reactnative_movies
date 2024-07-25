import { Account, Client } from 'react-native-appwrite';

export const appwriteConfig= {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '66977c1a001d5a73ecd1',
    databaseId: '66977f25001f2a894085',
    userCollectionId: '66977f8a001450497af0',
    videoCollectionId: '66977fe1000d2e74e494',
    storageId:'6697836b00162c4166e6'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.


    const account = new Account(client);

    const createUser = () =>{
        account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
    }


