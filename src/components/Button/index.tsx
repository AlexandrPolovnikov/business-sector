import { COLOR_TYPES } from '../../library/constants.enum';
import './index.scss';

interface ButtonProps {
    className?: string;
    text?: string | number;
    type?: COLOR_TYPES;
    disabled?: boolean;
    onClick?(): void;
}

const getColor = (type: COLOR_TYPES | undefined): string => {
    switch (type) {
        case COLOR_TYPES.info:
            return 'info';

        case COLOR_TYPES.danger:
            return 'danger';

        default:
            return 'default';
    }
};

const Button = ({
    text = 'No text',
    type,
    className,
    disabled,
    onClick,
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={`button text ${className} ${getColor(type)}`}
            disabled={disabled}
            onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
