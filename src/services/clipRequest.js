import axios from 'axios';

const baseUrl = '/api/clip-requests';

const create = (newClipRequest) => {
  const request = axios.post(baseUrl, newClipRequest);
  return request.then((response) => response.data);
};

export default { create };
