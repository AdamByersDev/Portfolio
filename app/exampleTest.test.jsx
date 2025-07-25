require('@testing-library/jest-dom');
const { Button } = require('@mui/material');
const { render, screen } = require('@testing-library/react');
const userEvent = require('@testing-library/user-event').default;

test('calls onClick when clicked', async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Button Text</Button>);

  const button = screen.getByRole('button', { name: /button text/i });
  await userEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
