import React, { JSXElementConstructor, useState } from 'react';
import { Helmet } from 'react-helmet';
import { CategoryItem } from '../../components/CategoryItem/CategoryItem';
import { Button } from '../../UiKit/Button/Button';
import { Select } from '../../UiKit/Select/Select';
import classes from './categories.module.scss';

export const Categories: JSXElementConstructor<any> = () => {

    const [categories, setCategories] = useState<any[]>(['Room', 'Travel', 'Job', 'Professional', 'Science', 'Animals']);
    const [categoriesStudy, setCategoriesStudy] = useState<any[]>(['Professional', 'Science', 'Animals']);

    const [filteredCategory, setFilteredCategory] = useState<string>('');
    const [tabCount, setTabCount] = useState<number>(2);

    const filterCategory = (data: any[]) => {
        if (!filteredCategory) {
            return data;
        } else {
            return data.filter((elem: any) => elem.includes(filteredCategory));

        }
    };


    return (<section>
        <Helmet><title>EngWords | Категорії</title></Helmet>

        <h1>Тут ви можете додати отдразу набір слів за категорією</h1>

        <div className={classes.menu}>
            <Select value={categories} onChange={setFilteredCategory} placeholder='' />
        </div>

        <div className={classes.tabPanel}>
            <Button size='lg' onClick={() => setTabCount(1)} color={tabCount === 1 ? 'active' : undefined} type='text'>На вивченні</Button>
            <Button size='lg' onClick={() => setTabCount(2)} color={tabCount === 2 ? 'active' : undefined} type='text'>Усі категоії</Button>
        </div>
        {
            tabCount === 2 && <div className={classes.categoryList}>
                {
                    categories.length > 0 && filterCategory(categories).map((category => <CategoryItem key={category} title={category} amount={10} />))
                }
            </div>
        }
    </section>);
};