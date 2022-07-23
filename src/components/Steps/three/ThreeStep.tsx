import React, { FC, useMemo, useState } from 'react';
import { AnswerButton } from '../../../UiKit/AnswerButton/AnswerButton';
import { IWordInStep } from '../firstOeSecond/FirstOrSecondStep';
import classes from './three.module.scss';
import back from '../../../img/back.svg';
import { isRightEnum } from '../../../Pages/Study/Study';

interface IThreeStep {
    wordLesson: IWordInStep;
    setAnswer: (data: string) => void;
    isRightAnswer: isRightEnum;
}

export const ThreeStep: FC<IThreeStep> = ({ wordLesson, setAnswer, isRightAnswer }: IThreeStep) => {
    const { word, step, transcription, translates } = wordLesson;

    const [answerArr, setAnswerArr] = useState<any[]>([]);

    function answerhandler(elem: any) {
        setAnswerArr((prev: any[]) => ([...prev, elem]));
        const data = answerArr.reduce((acc, next) => acc + next.letter, '') + elem.letter;
        setAnswer(data);
    }


    const arr = useMemo(() => {
        return word.split('').sort(() => (Math.random() > .5) ? 1 : -1);

    }, []);

    function backSpace() {
        const newState = answerArr.slice(0, answerArr.length - 1);
        setAnswerArr(newState);
    }
    console.log(isRightAnswer);

    return (<section className={classes.wrapper}>
        <div className={classes.title}>{translates[0]}</div>
        <div>{transcription}</div>
        <div className={classes.resultText}>
            {
                answerArr.reduce((acc, next) => acc + next.letter, '')
            }
        </div>
        <div className={classes.letters}>
            {
                arr.map((letter: string, index: number) => (
                    <AnswerButton
                        key={index}
                        avaliable={!answerArr.find((elem: any) => elem.index === index && elem.letter === letter) && isRightAnswer === isRightEnum.empty}
                        onClick={() => answerhandler({ index, letter })}
                    >
                        {letter.toUpperCase()}
                    </AnswerButton>
                ))
            }
            <AnswerButton
                key={'uniq'}
                avaliable={answerArr.length > 0 && isRightAnswer === isRightEnum.empty}
                onClick={backSpace}
            >
                <img height={28} src={back} />
            </AnswerButton>
        </div>
    </section>);
};