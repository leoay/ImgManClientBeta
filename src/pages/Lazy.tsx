import { Image, Button, message } from 'antd';
import styles from './Gallary.less';
import { useEffect, useState } from 'react';
import { getPicList } from '@/services/ant-design-pro/api';


const Lazy: React.FC = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const msg = await getPicList();
      setData(msg.picdata);
    }
    )();
  }, []);

  return <Image.PreviewGroup>
    {
      Object.keys(data).map((v, i) => {
        return <Image className={styles.imgitem} width={200} src={data[i].PathOri} key={i} />
      })
    }
  </Image.PreviewGroup>
};

export default Lazy;