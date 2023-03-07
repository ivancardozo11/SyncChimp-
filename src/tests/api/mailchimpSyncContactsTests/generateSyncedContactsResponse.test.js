import { generateSyncedContactsResponse } from '../../../api/services/mailchimpSyncContactsService';

/* 
This test checks the functionality of the generateSyncedContactsResponse() function in the mailchimpSyncContactsService service. 
It is provided with some existing members and a count of added members to check that the generated object has the expected format and values.
The function is expected to return an object with two properties, syncedContacts and contacts. syncedContacts should be the sum of the number 
of existing members and the number of added members. contacts should be a list of objects, one for each existing member, containing their names 
and email addresses.

The test verifies if the actual response generated by the function matches the expected response. If the actual response and the expected response 
match, then the test passes, otherwise it fails.

*/

describe('generateSyncedContactsResponse function', () => {
  test('should generate the correct response object for synced contacts', () => {
    const addedCount = 2;
    const existingMembers = [
      {
        merge_fields: {
          FNAME: 'John',
          LNAME: 'Doe'
        },
        email_address: 'john.doe@example.com'
      },
      {
        merge_fields: {
          FNAME: 'Jane',
          LNAME: 'Doe'
        },
        email_address: 'jane.doe@example.com'
      }
    ];

    const expectedSyncedContacts = {
      syncedContacts: 4,
      contacts: [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com'
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@example.com'
        }
      ]
    };

    const actualSyncedContacts = generateSyncedContactsResponse(addedCount, existingMembers);

    expect(actualSyncedContacts).toEqual(expectedSyncedContacts);
  });
});
