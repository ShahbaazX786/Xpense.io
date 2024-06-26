import PreviousButton from '../../_components/PreviousButton';
import BudgetList from './_components/Bu/BudgetList';

const Budgets = () => {

  return (
    <div className='p-10'>
      <PreviousButton />
      <h2 className='font-bold text-3xl'>My Budgets</h2>
      <BudgetList />
    </div>
  )
}

export default Budgets;