import { ComponentProps } from 'react';
import { ArrowTopRightIcon, SunIcon } from '@radix-ui/react-icons';
import { Navigation } from '../../../components/navigation';
import { LogoContainer, StyledHeader, StyledThemeToggle } from './header.styled';
import Logo from '../../../assets/logo.svg';
import { useTheme } from '../../../hooks/useTheme';

type NativeProps = ComponentProps<typeof StyledHeader>;

interface HeaderProps extends NativeProps {}

export const Header: React.FunctionComponent<HeaderProps> = props => {
	const { toggle: toggleTheme } = useTheme();

	return (
		<StyledHeader {...props}>
			<LogoContainer>
				<Logo />
			</LogoContainer>
			<Navigation css={{ marginLeft: 'auto' }}>
				<a
					href='https://github.com/sasa-djuric/react-cli'
					target='_blank'
					rel='noreferrer'
					style={{ display: 'flex' }}
				>
					<Navigation.Item>
						GitHub
						<ArrowTopRightIcon />
					</Navigation.Item>
				</a>
				<a
					href='https://www.npmjs.com/package/cr-react-cli'
					target='_blank'
					rel='noreferrer'
					style={{ display: 'flex' }}
				>
					<Navigation.Item>
						NPM
						<ArrowTopRightIcon />
					</Navigation.Item>
				</a>
				<StyledThemeToggle onClick={toggleTheme}>
					<SunIcon />
				</StyledThemeToggle>
			</Navigation>
		</StyledHeader>
	);
};
