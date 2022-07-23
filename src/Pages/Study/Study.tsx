import React, { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { dict } from '../../dic';
import { FirstOrSecondStep, IWordInStep } from '../../components/Steps/firstOeSecond/FirstOrSecondStep';
import './study.scss';
import { Button } from '../../UiKit/Button/Button';
import { ThreeStep } from '../../components/Steps/three/ThreeStep';
import { FourStep } from '../../components/Steps/four/Four';
import { useKeyPress } from '../../hooks/useKeyPress';
import ring from '../../audio/done2.mp3';

export enum isRightEnum {
    right = 'right',
    lose = 'lose',
    empty = 'empty'
}

export const Study: FC = () => {



    const [wordsForStudy, setWordsForStudy] = useState<IWordInStep[]>([]);

    const [count, setCount] = useState<number>(0);
    const [answer, setAnswer] = useState<string>('');
    const [isRightAnswer, setIsRightAnswer] = useState<isRightEnum>(isRightEnum.empty);

    const enterPress = useKeyPress('Enter', checkIsRight);

    useEffect(() => {

        const res: IWordInStep[] = dict.filter((_: any, index: number) => index < 10);

        setWordsForStudy(res);
    }, []);


    function nextWord(): void {
        setCount((prev: number) => prev += 1);
        setIsRightAnswer(isRightEnum.empty);
        setAnswer('');

    }
    const [audio] = useState(new Audio(ring));

    function checkIsRight(): void {
        if (wordsForStudy.length === 0) return;
        let isRight: boolean = false;

        audio.play();

        if (wordsForStudy[count].step === 1 || wordsForStudy[count].step === 2) {

            isRight = wordsForStudy[count].translates.includes(answer);
        }

        if (wordsForStudy[count].step === 3 || wordsForStudy[count].step === 4) {
            isRight = wordsForStudy[count].word === answer;
        }

        if (isRight) {
            setIsRightAnswer(isRightEnum.right);
        } else {
            setIsRightAnswer(isRightEnum.lose);
        }

        if (isRightAnswer !== isRightEnum.empty) {
            nextWord();
        }
    }

    const buttonText = isRightAnswer === 'empty' ? 'Перевірити' : 'Далі';
    const btnColor = isRightAnswer === 'right' ? 'success' : isRightAnswer === 'lose' ? 'error' : 'default';



    return (
        <div className='study-wrapper'>
            <div className='info'>
                <span>
                    {wordsForStudy.length > 0 && <>
                        Крок: {wordsForStudy[count].step} / 4
                    </>}
                </span>

                <span>
                    У вправі: {count}/ 10
                </span>
            </div>
            {
                wordsForStudy.length > 0 && (wordsForStudy[count].step === 1 || wordsForStudy[count].step === 2) && <FirstOrSecondStep isRightAnswer={isRightAnswer} variant={answer} variantHandler={setAnswer} wordLesson={wordsForStudy[count]} />

            }
            {
                wordsForStudy.length > 0 && wordsForStudy[count].step === 3 && <ThreeStep setAnswer={setAnswer} wordLesson={wordsForStudy[count]} isRightAnswer={isRightAnswer} />

            }
            {
                wordsForStudy.length > 0 && wordsForStudy[count].step === 4 && <FourStep answer={answer} setAnswer={setAnswer} wordLesson={wordsForStudy[count]} isRightAnswer={isRightAnswer} />

            }
            <Button color={btnColor} onClick={checkIsRight} >{buttonText}</Button>
        </div>);
};