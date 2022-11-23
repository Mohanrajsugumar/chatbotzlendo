import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import Link from './Link'
import '../../App.css'


const theme = {
  background: '#D3D3D3',
  fontFamily: 'Roboto:wght@300',
  headerBgColor: '#0f4d4a',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0f4d4a',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'ChatBot',
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hello!',
              trigger: 'q-firstname',
            },
          
            {
              id: 'q-firstname',
              message: 'I am Zlendo Chat bot, Please tell me your name ?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'Hi,{previousValue} I am Zlendo Bot! What do you want to Know about Zlendo? pick from the given options',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'About us', trigger: '3' },
                { value: 2, label: ' Services in zlendo', trigger: '4' },
                { value: 3, label: 'Employee strength', trigger: '5' },
                { value: 4, label: 'Partner with us', trigger: '6' },
                { value: 5, label: 'career opportunity', trigger: '7' },
                { value: 6, label: 'Contact us', trigger: '8' },
                { value: 7, label: 'Our Social presence', trigger: '9' },
              ],
            },
            {
              id: '3',
              message:
                'Zlendo Technologies with its deep domain knowledge has designed and developed, plenty of web applications across the multiple industry verticals. As a web application development company, we possess a great understanding of current tech-market trends and acquire the technological challenges.',
              trigger: 'qtype',
            },
            {
              id: '4',
              message:
                `We work on,Cloud solutions,
                Application services,
                Artificial Intelligence,
                Maintenance Support,
                SEO Optimization,
                Mobile Application,
                Quality Assurance`,
              trigger: 'qtype',
            },
            {
              id: '5',
              message:
                'We have 50 + employees',
              trigger: 'qtype',
            },
            {
              id: '6',
              message:
                'Drop a mail to us at zlendoit@zlendo.com',
              trigger: 'qtype',
            },
            {
              id: '7',
              message:
                'Send Your CV to us careers@zlendo.com',
              trigger: 'qtype',
            },
            {
              id: '8',
              message:
              'zlendoit@zlendo.com',
            trigger: 'qtype',
            },
            {
              id: '9',
              component: <Link />,
              trigger: 'q-submit',
            },
            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'About us', trigger: '3' },
                { value: 2, label: ' Services in zlendo', trigger: '4' },
                { value: 3, label: 'Employee strength', trigger: '5' },
                { value: 4, label: 'Partner with us', trigger: '6' },
                { value: 5, label: 'career opportunity', trigger: '7' },
                { value: 6, label: 'Contact us', trigger: '8' },
                { value: 7, label: 'Our Social presence', trigger: '9' },
              ],
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn" onClick={() => startChat()}>
            <i className="fa fa-minus"></i>
          </button>
        ) : (
          <button className="btn" onClick={() => hideChat()}>
            <i className="fa fa-plus"></i>
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot
