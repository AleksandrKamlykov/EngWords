import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { dict } from '../../dic';
import { FirstStep, IWordInStep } from '../../components/Steps/first/FirstStep';
import './study.scss';
import { Button } from '../../UiKit/Button/Button';

export enum isRightEnum {
    right = 'right',
    lose = 'lose',
    empty = 'empty'
}

export const Study: FC = () => {

    const [wordsForStudy, setWordsForStudy] = useState<IWordInStep[]>([]);

    const [count, setCount] = useState<number>(0);
    const [variant, setVariant] = useState<string>('');
    const [isRightAnswer, setIsRightAnswer] = useState<'right' | 'lose' | 'empty'>('empty');

    useLayoutEffect(() => {

        const res: IWordInStep[] = dict.filter((_: any, index: number) => index < 10);

        setWordsForStudy(res);
    }, []);


    function nextWord(): void {
        setCount((prev: number) => prev += 1);
        setIsRightAnswer('empty');

    }

    function checkIsRight(event: React.MouseEvent): void {

        const isRight: boolean = wordsForStudy[count].translates.includes(variant);

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
                    {count + 1}/ 10
                </span>
            </div>
            {
                wordsForStudy.length > 0 && <FirstStep isRightAnswer={isRightAnswer} variantHandler={setVariant} wordLesson={wordsForStudy[count]} />

            }
            <Button color={btnColor} onClick={checkIsRight} >{buttonText}</Button>
        </div>);
};