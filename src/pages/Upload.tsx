import React, {useState} from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';

const { Dragger } = Upload;

const UploadPage: React.FC = () => {

  const [datestr, setDateStr] = useState("");
  const props = {
    name: 'file',
    multiple: true,
    data: {
      date: datestr
    },
    accept: '.jpg,.gif,.png,.jpeg',
    action: '/api/upload',
    onChange(info) {
      //alert(datestr);
      //console.log(datestr);
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const onChangeDate = (date, dateString) => {
    setDateStr(dateString);
    //console.log(date, dateString);
  };

  return (
    <PageContainer>
      <Card>

        <Space direction="vertical">
          <DatePicker onChange={onChangeDate}/>
        </Space>

        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
          <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或者将文件拖动到此处上传</p>
          <p className="ant-upload-hint">
          支持单个或多个文件上传。
          </p>
        </Dragger>
      </Card>
    </PageContainer>
  );
};

export default UploadPage;
