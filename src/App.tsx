import React, { useEffect } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import styled from '@emotion/styled';
import Logo from './assets/logo.png';
import Home from './pages/Home';
import { useRecoilState } from 'recoil';
import { isLoggedInState } from './store';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <Home />
          <Logout setIsLoggedIn={setIsLoggedIn} />
        </>
      ) : (
        <Box>
          <img src={Logo} alt={'휴먼스케이프 로고'} />
          <Explain>
            Human 전용 나를 맞혀봐 퀴즈 앱입니다. <br />
            휴먼스케이프 연동된 구글 계정으로 <br /> 로그인하여 사용할 수
            있습니다.
          </Explain>
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Box>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

const Explain = styled.p`
  padding-bottom: 10px;
`;

const Box = styled.div`
  padding: 70px;
  border: 1px solid #dadce0;
  border-radius: 10px;
  text-align: center;
`;

export default App;
