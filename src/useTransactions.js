import { useContext } from 'react';
import { ExpenseTrackerContext } from './Context/context';

import { incomeCategories, expenseCategories, resetCategories } from './Constants/categories';

const useTransactions = (title) => {
    resetCategories();

    const { transactions } = useContext(ExpenseTrackerContext);
    const rightTransactions = transactions.filter( (t) => title === t.type);
    const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;
    
    rightTransactions.forEach((t) =>{
        const category = categories.find((c) => t.category === c.type);

        if(category){
            category.amount += t.amount;
        }
    });

    console.log({rightTransactions, total, categories});

    const filteredCategories = categories.filter((c) => c.amount > 0 );

    const chartData = {
        datasets : [{
            data : filteredCategories.map((c) => c.amount),
            backgroundColor : filteredCategories.map((c) => c.color),
        }],
        labels : filteredCategories.map((c) => c.type)
    };

    return {filteredCategories, total, chartData};
};

export default useTransactions;