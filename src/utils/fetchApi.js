import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const addContactApi = newContact => {
  return axios
    .post('/contacts', newContact)
    .then(({ data }) => data)
    .catch(err => err);
};

export const getContactsApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) => data)
    .catch(err => err);
};

export const deleteContactsApi = id => {
  return axios
    .delete(`/contacts/${id}`)
    .then(() => id)
    .catch(err => err);
};
