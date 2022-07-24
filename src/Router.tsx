import { FC } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Categories } from "./Pages/Categories/Categories";
import { Main } from "./Pages/Main/Main";
import { Study } from "./Pages/Study/Study";

export const Router: FC = () => {


    return (<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/study" element={<Study />} />
        <Route path="/categories" element={<Categories />} />
    </Routes>);
};