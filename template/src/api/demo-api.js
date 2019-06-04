import ajax from '../../util/ajax';

const getInfo = async (params = '') => {
  const resp = await ajax.get('/api/demo/info', {
    params
  });
  return resp.data;
};

export {
  getInfo
};