import React, {useState} from "react";
import contact from "../Images2/contact.jpg";
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Select,
  Cascader,
  DatePicker,
  Button,
  TreeSelect,
} from 'antd';

//https://stackoverflow.com/questions/4997493/set-opacity-of-background-image-without-affecting-child-elements
const background1style = {
  backgroundImage: `url(${ contact })`,
  height: '30vh', 
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const background3style = {
    backgroundColor: 'white',
    height: '70vh', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

/*const background2style = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.12), rgba(255,255,255,0.12)),url(${ snow })`,
  backgroundRepeat  : 'repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  minHeight: '100%',
  backgroundAttachment: 'fixed',
};*/

function Contact () {
    
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <div style={background1style} className="animate-fade-in-down flex flex-col justify-center items-center w3-animate-right">
        <h1 className="mb-12 lg:text-7xl md:text-5xl sm:text-3xl text-3xl text-white w3-animate-top">Contact Us</h1>
      </div>
      <div style={background3style} className="mt-32 animate-fade-in-down ml-32 mr-32 justify-center items-center w3-animate-left">
            <Form
                labelCol={{span: 4,}}
                wrapperCol={{span: 10,}}
                layout="horizontal"
                initialValues={{size: componentSize,}}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
            <Form.Item label="Name">
                <Input />
            </Form.Item>
            <Form.Item label="Question 1">
                <Select>
                <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Question 2">
                <TreeSelect
                treeData={[
                    {
                    title: 'Light',
                    value: 'light',
                    children: [
                        {
                        title: 'Bamboo',
                        value: 'bamboo',
                        },
                    ],
                    },
                ]}
                />
            </Form.Item>
            <Form.Item label="Question 3">
                <Cascader
                options={[
                    {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                        {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        },
                    ],
                    },
                ]}
                />
            </Form.Item>
            <Form.Item label="Date">
                <DatePicker />
            </Form.Item>
            <Form.Item label="Submit">
                <Button>Submit</Button>
            </Form.Item>
            </Form>
      </div>
    </>
  )
}

export default Contact;
