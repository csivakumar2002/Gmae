import styled from 'styled-components'

export const GamePlayMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vh;
  background-color: #223a5f;
  padding: 20px;
`

export const GameRulesView = styled.div`
  display: flex;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`

export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  width: 10%;
  height: 90%;
  margin-top: auto;
`
