import React, { FC, useEffect, useState } from 'react';
import { dict } from '../../dic';
import { FirstOrSecondStep, IWordInStep } from '../../components/Steps/firstOeSecond/FirstOrSecondStep';
import classes from './study.module.scss';
import { Button } from '../../UiKit/Button/Button';
import { ThreeStep } from '../../components/Steps/three/ThreeStep';
import { FourStep } from '../../components/Steps/four/Four';
import { useKeyPress } from '../../hooks/useKeyPress';
import ringSuccess from '../../audio/done2.mp3';
import ringLose from '../../audio/done.mp3';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export enum isRightEnum {
    right = 'right',
    lose = 'lose',
    empty = 'empty'
}

export const Study: FC = () => {

    const history = useNavigate();
    const [wordsForStudy, setWordsForStudy] = useState<IWordInStep[]>([]);

    const [count, setCount] = useState<number>(0);
    const [answer, setAnswer] = useState<string>('');
    const [isRightAnswer, setIsRightAnswer] = useState<isRightEnum>(isRightEnum.empty);
    const [onLearning, setOnLearning] = useState<boolean>(false);


    const [audioSuccess] = useState(new Audio(ringSuccess));
    const [audioLose] = useState(new Audio(ringLose));
    const enterPress = useKeyPress('Enter', checkIsRight);



    function nextWord(): void {
        setCount((prev: number) => prev += 1);
        setIsRightAnswer(isRightEnum.empty);
        setAnswer('');

    }

    function onStart() {
        const res: IWordInStep[] = dict.filter((_: any, index: number) => index < 10);

        setWordsForStudy(res);
        setOnLearning(true);
    }

    function checkIsRight(): void {
        if (wordsForStudy.length === 0) return;
        let isRight: boolean = false;


        if (wordsForStudy[count].step === 1 || wordsForStudy[count].step === 2) {

            isRight = wordsForStudy[count].translates.includes(answer);
        }

        if (wordsForStudy[count].step === 3 || wordsForStudy[count].step === 4) {
            isRight = wordsForStudy[count].word === answer;
        }

        if (isRight) {
            audioSuccess.play();

            setIsRightAnswer(isRightEnum.right);
        } else {
            setIsRightAnswer(isRightEnum.lose);
            audioLose.play();
        }

        if (isRightAnswer !== isRightEnum.empty) {
            nextWord();
        }
    }

    const toCategoriesPage = () => history('/categories');

    const buttonText = isRightAnswer === 'empty' ? 'Перевірити' : 'Далі';
    const btnColor = isRightAnswer === isRightEnum.right ? 'success' : isRightAnswer === isRightEnum.lose ? 'error' : 'default';


    return (
        <section className={classes['study-wrapper']}>

            <Helmet><title>EngWords | На вивченні</title></Helmet>

            {
                !onLearning && <div className={classes.panel}>
                    <div>
                        <p>На вивченні: <strong>10</strong></p>
                        <Button color='primary' onClick={onStart} >Почати вправу</Button>
                    </div>
                    <div>
                        <p>Категорії на вивченні:</p>
                        <ul className={classes.categoriesList}>
                            <li><strong>Job</strong></li>
                            <li><strong>Pictures</strong></li>
                        </ul>
                        <Button onClick={toCategoriesPage}>Додати категорію</Button>
                    </div>
                </div>
            }

            {
                onLearning && wordsForStudy.length > 0 && <>
                    <div className={classes.info}>
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
                </>
            }
        </section>);
};