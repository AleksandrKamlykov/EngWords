import React, { JSXElementConstructor, useState } from 'react';
import { Helmet } from 'react-helmet';
import { CategoryItem } from '../../components/CategoryItem/CategoryItem';
import { Select } from '../../UiKit/Select/Select';
import classes from './categories.module.scss';

export const Categories: JSXElementConstructor<any> = () => {

    const [categories, setCategories] = useState<any[]>(['Room', 'Travel', 'Job', 'Professional',]);

    const [filteredCategory, setFilteredCategory] = useState<string>('');

    const filterCategory = (data: any[]) => {
        if (!filteredCategory) return data;
        return data.filter((elem: any) => elem.includes(filteredCategory));
    };


    return (<section>
        <Helmet><title>EngWords | Категорії</title></Helmet>

        <h1>Тут ви можете додати отдразу набір слів за категорією</h1>

        <div className={classes.menu}>
            <Select value={categories} onChange={setFilteredCategory} placeholder='' />
        </div>
        <div className={classes.categoryList}>
            {
                categories.length > 0 && filterCategory(categories).map((category => <CategoryItem key={category} title={category} />))
            }
        </div>
    </section>);
};