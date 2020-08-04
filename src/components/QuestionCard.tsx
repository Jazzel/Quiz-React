import React from "react";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

interface Props {
  name: string;
  endGame: Boolean;
  score: number;
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  tryAgain: () => void;
  selectedAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = ({
  name,
  endGame,
  score,
  question,
  answers,
  callback,
  tryAgain,
  selectedAnswer,
  questionNumber,
  totalQuestions,
}) => {
  const result = (score * 100) / totalQuestions;
  console.log(result);

  return (
    <>
      <Wrapper>
        {endGame ? (
          result > 40 ? (
            <h1 className="result green">
              Congratulations ! You have passed the test with {result} % score.{" "}
            </h1>
          ) : (
            <h1 className="result red">
              Oops ! You have failed the test, your score is {result} %.
            </h1>
          )
        ) : (
          <h1 className="result black">Hi {name}. Good luck for the test !!</h1>
        )}

        <p className="number">
          Question: {questionNumber} out of {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }}></p>
        <div>
          {answers.map((answer) => (
            <ButtonWrapper
              key={answer}
              correct={selectedAnswer?.correctAnswer === answer}
              userClicked={selectedAnswer?.answer === answer}
            >
              <button
                disabled={!!selectedAnswer}
                value={answer}
                onClick={callback}
              ></button>
              <p dangerouslySetInnerHTML={{ __html: answer }}></p>
              <small></small>
            </ButtonWrapper>
          ))}
        </div>
      </Wrapper>
      {endGame ? (
        <div className="form-group">
          <button className="start" onClick={tryAgain}>
            Try again
          </button>
        </div>
      ) : null}
    </>
  );
};
