import React, { FC } from "react";
import { isRightEnum } from "../../../Pages/Study/Study";
import './styles.scss';

export interface IWordInStep {
    word: string,
    step: number,
    transcription: string;
    translates: string[];
}

export interface IFirstStep {
    wordLesson: IWordInStep;
    variantHandler: (variant: string) => void;
    isRightAnswer: 'right' | 'lose' | 'empty';
    variant: string;

}

export const FirstOrSecondStep: FC<IFirstStep> = ({ wordLesson, variantHandler, isRightAnswer, variant }: IFirstStep) => {

    const { word, step, transcription, translates } = wordLesson;

    function change(event: any): void {
        variantHandler(event.target.value);
    }

    return (
        <div className="first-step__wrapper" style={{ border: isRightAnswer === 'lose' ? '3px solid #a00' : isRightAnswer === 'right' ? '3px solid rgb(5, 195, 132)' : '1px solid #222' }}>
            <div style={{ width: '50%', borderRight: '1px solid #eee' }}>
                <h3>{word}</h3>
                <h5>{transcription}</h5>
            </div>
            <ul className="group">
                {
                    translates.map((elem: string, index: number) => {

                        return (
                            <li key={elem}>

                                <input disabled={isRightAnswer !== isRightEnum.lose && variant !== elem} onClick={change} type="radio" id={elem} name="answer2" value={elem} />
                                <label data-content={elem} htmlFor={elem}>{elem}</label>
                            </li>

                        );
                    })
                }
            </ul>
        </div>
    );
};