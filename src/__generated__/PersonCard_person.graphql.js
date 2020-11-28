/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PersonCard_person$ref: FragmentReference;
declare export opaque type PersonCard_person$fragmentType: PersonCard_person$ref;
export type PersonCard_person = {|
  +id: string,
  +name: ?string,
  +salary: ?number,
  +$refType: PersonCard_person$ref,
|};
export type PersonCard_person$data = PersonCard_person;
export type PersonCard_person$key = {
  +$data?: PersonCard_person$data,
  +$fragmentRefs: PersonCard_person$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PersonCard_person",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "salary",
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '4042f9666b519366d0d9cfa120cca09a';

module.exports = node;
