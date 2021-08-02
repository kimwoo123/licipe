import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Button, Grid } from '@material-ui/core'
import { Box } from '@material-ui/core'


const LoginForm = styled.form`
  display:flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`

const EmailLogin = ({history}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const onLogin = () => {
    console.error("BASE_URL 설정하지 않음")
    // Ajax 통신 post 
    const BASE_URL = process.env.REACT_APP_API_URL
    const PORT = process.env.REACT_APP_API_PORT
    const config = {
      method: 'post',
      url: `${BASE_URL}:${PORT}/login`,
      data: {
        email,
        password,
      }
    }
    axios(config)
      .then( res => {
      alert(`${res}/ login!`)
      //modal로 구현할경우 아래를 제거하고 로그인 상태를 넘겨주면됨
      history.push('/')
    }).catch( e => {
      console.log(e)
    })
  }
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      // style={{ minHeight: '100vh' }}
    >
      <h1> Email Login </h1>
      <LoginForm onSubmit={onLogin}>
        <label htmlFor="email">
          Email:
          <input 
            type="email" placeholder="이메일 주소를 입력하세요"
            id="email"
            value={email}
            onChange={ e => setEmail(e.target.value)}
          ></input>
        </label>
        <br />
        <label htmlFor="password">
          Password: 
          <input 
            type="password" placeholder="비밀번호를 입력하세요"
            id="password"
            value={password}
            onChange={ e => setPassword(e.target.value)}
          ></input>
        </label>
        <Box mt={2}>
          <Button 
            
            onClick={onLogin}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Box>
      </LoginForm>
      <div>
        <Button onClick={() => history.push('/join')}>아직 회원이 아니신가요?</Button>
      </div>
    </Grid>
  )
}

export default EmailLogin 
