import { StyledButton } from './button.styles';

const Button = ({ color, children, action, disabled }) => {
	console.log(color);
	return (
		<StyledButton onClick={action} color={color} disabled={disabled}>
			{children}
		</StyledButton>
	);
};

export default Button;
