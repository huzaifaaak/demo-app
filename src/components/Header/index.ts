import { Header as Wrapper } from './Header';
import { HeaderComponent } from './Header.decl';
import { HeaderAction } from './HeaderAction';
import { HeaderActions } from './HeaderActions';
import { Heading } from './Heading';

const HeaderWrapper = Wrapper as HeaderComponent;
HeaderWrapper.Title = Heading;
HeaderWrapper.Actions = HeaderActions;
HeaderWrapper.Action = HeaderAction;

export const Header = HeaderWrapper;
