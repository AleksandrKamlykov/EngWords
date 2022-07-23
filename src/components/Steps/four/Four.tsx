import React, { FC } from 'react';
import { isRightEnum } from '../../../Pages/Study/Study';
import { Inputtext } from '../../../UiKit/TextInput/TextInput';
import { IWordInStep } from '../firstOeSecond/FirstOrSecondStep';
import classes from './four.module.scss';

interface IFour {
    wordLesson: IWordInStep;
    answer: string;
    setAnswer: (data: string) => void;
    isRightAnswer: isRightEnum;
}

export const FourStep: FC<IFour> = ({ wordLesson, setAnswer, answer, isRightAnswer }: IFour) => {
    const { word, step, transcription, translates } = wordLesson;

    function handleAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        setAnswer(value);
    }


    return (<section className={classes.wrapper}>
        <p>{translates[0]}</p>
        <Inputtext disabled={isRightAnswer !== isRightEnum.empty} onChange={handleAnswer} value={answer} placeholder={`${word.length} букв`} />
    </section>);
};