import Expenseitem from "./Component/Expenseitem";

function App() {

  let expenses = [
    {
      id: 'e1',
      title: 'school fee',
      amount: '200',
      date: new Date(2021, 5, 12)
    },
    {
      id: 'e2',
      title: 'Book',
      amount: '250',
      date: new Date(2022, 7, 11)
    },
    {
      id: 'e3',
      title: 'Note Book',
      amount: '300',
      date: new Date(2023, 8, 9)
    },
    {
      id: 'e4',
      title: ' House Rent',
      amount: '600',
      date: new Date(2024, 3, 8)
    },
  ];







  let expenseDate = new Date(2023, 3, 3)
  let expenseTitle = "School Fee"
  let expenseAmount = 300



  return (

    <div>
      <h2>Lets started</h2>
      <Expenseitem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}>
      </Expenseitem>

      <Expenseitem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}>
      </Expenseitem>

      <Expenseitem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}>
      </Expenseitem>

      <Expenseitem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}>
      </Expenseitem>
    </div>




  );
}

export default App;
