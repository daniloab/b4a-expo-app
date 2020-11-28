import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';

const fetchQuery = async (request, variables) => {
    const body = JSON.stringify({
        query: request.text,
        variables,
    });

    const headers = {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'X-Parse-Application-Id': 'f8pSMPVHNRYMG0jJy8ArJpaa8myO6llMHpTSgG43',
        'X-Parse-Master-Key': 'mGwCt6SFMZYUXK3QufHDlE1nhJkYjH6Xh72KR033',
        'X-Parse-Client-Key': 'ZTfWxTADjeLHRzYn3V7F2XS64XFyBmxgTB1v5PAx',
    };

    const response = await fetch(`https://parseapi.back4app.com/graphql`, {
        method: 'POST',
        headers,
        body,
    });

    return await response.json();
};

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

export default environment;