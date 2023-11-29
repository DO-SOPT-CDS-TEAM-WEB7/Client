import { useEffect } from 'react';

import { getApiTest } from '../apis/getApiTest';

const ApiTest = () => {
  const getMinPriceList = async () => {
    // 여기서 api 호출 함수 불러서 async/await으로 처리!
    // {data : {data}} 는 구조분해할당! 처음에 data만 불러오게 되면 상태코드, message, data가
    // 다 담겨있기 때문에 다시 한 번 구조분해할당으로 data에 접근하는 것!
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
