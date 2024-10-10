import { MyButton } from './MyButton';

export default {
    title: 'Components/MyButton',
    component: MyButton,
};

export const Default = () =>
    <MyButton onClick={() => alert('Button clicked!')}>
        Click me
    </MyButton>;
