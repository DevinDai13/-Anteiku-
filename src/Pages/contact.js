import React, {useState, useEffect} from "react";
import contact from "../Images2/contact.jpg";
import 'antd/dist/antd.css';
import styled from "styled-components";
import { TitleStyles } from "../Components/reusableStyles";
import AOS from 'aos';
import "aos/dist/aos.css";
import {
  Form,
  Input,
  Select,
  Cascader,
  TreeSelect,
} from 'antd';

//https://stackoverflow.com/questions/4997493/set-opacity-of-background-image-without-affecting-child-elements
const background1style = {
  backgroundImage: `url(${ contact })`,
  height: '30vh', 
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius:'90px 90px 90px 90px',
  marginLeft: '2%',
  marginRight: '2%',
};

  const Section = styled.section`
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 10%;
  margin-bottom: 10%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};
  .container {
    background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
    padding: 0.3vw;
    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      border-radius: 50px;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 4.7rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;

function Contact () {
    
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div style={background1style} className="animate-fade-in-down flex flex-col justify-center items-center w3-animate-right">
        <h1 className="mb-12 lg:text-7xl md:text-5xl sm:text-3xl text-3xl text-white w3-animate-top">Contact Us</h1>
      </div>
      <Section id="newsletter" data-aos={"fade-bottom"}>
      <div className="title">
        <h1 data-aos={"fade-bottom"}>
          <span>LEAVE US A MESSAGE</span> 
        </h1>
        <Form
                labelCol={{span: 4,}}
                wrapperCol={{span: 70,}}
                layout="horizontal"
                initialValues={{size: componentSize,}}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                className="mt-32"
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
            </Form>
      </div>
      <div className="container" data-aos={"fade-bottom"}>
        <button>SUBMIT</button>
      </div>
    </Section>
    </div>
  )
}

export default Contact;
