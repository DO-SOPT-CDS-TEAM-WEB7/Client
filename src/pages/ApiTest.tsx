import { useEffect } from 'react';

import { getApiTest } from '../apis/getApiTest';

const ApiTest = () => {
  const getMinPriceList = async () => {
    try {
      const {
        data: { data },
      } = await getApiTest();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMinPriceList();
  }, []);

  return <div>ApiTest</div>;
};

export default ApiTest;
