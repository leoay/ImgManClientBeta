import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;

const LazyComponent = React.lazy(() => import('./Lazy'));

const Spinner = () => <div>i am Spinner...</div>;

// const LazyPicOri = La() => {
//     try {
//         // 登录
//           var msg = await getPicList();
//           console.log( msg['picdata']);
//           let elements = [];
//           msg['picdata'].forEach((item)=>{
//           elements.push(
//             <Image.PreviewGroup>
//                 <Image width={200} src={item.PathOri}  className={styles.imgitem}/>
//             </Image.PreviewGroup>
//           )
//       });
//       return <div>{elements}</div>>
//       //   setUserLoginState(msg);
//       } catch (error) {
//           return <div></div>
//       }
//     //return <div>i am lazy component</div>;
// };

const Gallary: React.FC = () => {

  return (
    <PageContainer>
      <React.Suspense fallback={<Spinner />}>
        <Title level={2}>原图4k</Title>
        <Card>
          <LazyComponent />

        </Card>
      </React.Suspense>
    </PageContainer>
  );
};

export default Gallary;
