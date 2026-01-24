import { render, screen } from '@testing-library/react';
import App from './App';

test("first test case" , () => {
    render(<App/>);

    const textCheck = screen.getByText("Hello World");
    expect(textCheck).toBeInTheDocument()

})