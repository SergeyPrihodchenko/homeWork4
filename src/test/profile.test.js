import ForTest from "../ForTest";
import { render } from "@testing-library/react";

describe('testing component', () => {
    it('snapshot test test', () => {
        const component = render(<ForTest/>);

        expect(component).toMatchSnapshot();
    });
});