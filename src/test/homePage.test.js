import HomePage from "../components/HomePage";
import { render } from "@testing-library/react";

describe('testing component', () => {
    it('snapshot test test', () => {
        const component = render(<HomePage/>);

        expect(component).toMatchSnapshot();
    });
});