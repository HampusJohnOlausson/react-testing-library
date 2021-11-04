import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
  return <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
          </BrowserRouter>
}

it('should render the correct amounts of incomplete tasks', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});