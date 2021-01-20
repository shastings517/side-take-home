import { wrapPromise } from './wrapPromise';

const url = 'https://api.simplyrets.com/properties';

const options = {
  headers: new Headers({
    'Authorization': 'Basic '+btoa('simplyrets:simplyrets'), 
    'Content-Type': 'application/json'
  }),
};

function fetchProperties() {
  const promise = fetch(url, options)
        .then((res) => res.json())
        .then((res) => res);

  return promise;
}

// based on example here: https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense
const createResource = () => {
  return {
    properties: wrapPromise(fetchProperties()),
    // can add more resources here in future
  };
};


export { createResource };
