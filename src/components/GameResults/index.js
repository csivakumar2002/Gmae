import {
  GameContainer,
  GameButton,
  GameImage,
  ResultText,
  ResultImageContainer,
  ResultName,
} from './styledComponents'

import './index.css'

const GameResults = props => {
  const {
    choiceList,
    opponentRandomChoice,
    isShow,
    text,
    newArray,
    restartGame,
  } = props
  const showGame = () => (
    <GameContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => opponentRandomChoice(choiceList[0].id)}
          >
            <GameImage
              src={choiceList[0].imageUrl}
              alt={choiceList[0].id}
              key={choiceList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => opponentRandomChoice(choiceList[1].id)}
          >
            <GameImage
              src={choiceList[1].imageUrl}
              alt={choiceList[1].id}
              key={choiceList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => opponentRandomChoice(choiceList[2].id)}
          >
            <GameImage
              src={choiceList[2].imageUrl}
              alt={choiceList[2].id}
              key={choiceList[2].id}
            />
          </GameButton>
        </>
      )}
      {!isShow && (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultText>{text}</ResultText>
            <button
              className="result-container"
              type="button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </button>
          </ResultImageContainer>
        </>
      )}
    </GameContainer>
  )
  return showGame()
}

export default GameResults
