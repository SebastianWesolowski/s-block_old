import { FC } from "react";
// import List from '@material-ui/core/List';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import { Link } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
// import { Container, MenuContainer } from './styled';
// import { routes } from '../../../constants/routes';
// import UserMenu from '../../../components/UserMenu';
// import LoggedIn from '../../../common/Guard/LoggedIn';
import { List } from "@mui/material";
import { IMobileMenuProps } from "./types";

import { Container } from "./styled";
import { SLogo } from "../../../atoms/SLogo/SLogo";

export const MobileMenu: FC<IMobileMenuProps> = ({
  logoAssets,
  isOpenMenu,
  onHandleClickMenu,
}) => {
  console.log("🚀 ~ file: MobileMenu.tsx ~ line 18 ~ isOpenMenu,", isOpenMenu);

  if (!isOpenMenu) {
    return null;
  }

  return (
    <Container>
      <SLogo logoAssets={logoAssets} height="100%" />
      <List component="nav" aria-label="top navigation">
        <ListItemButton component="a" >
          <ListItem>
            <ListItemText primary="Kalendarz webinarów" />
          </ListItem>
        </ListItemButton>
      </List>
    </Container>
  );
  // <Container>
  //   <MenuContainer>

  //       <Link to={routes.CALENDAR.url}>
  //         <ListItem>
  //           <ListItemText primary="Kalendarz webinarów" />
  //         </ListItem>
  //       </Link>
  //       <Divider />

  //       {/* TODO: create page B2B */}
  //       {/* <Link to={routes.B2B.url}> */}
  //       {/*  <ListItem> */}
  //       {/*    <ListItemText primary="Promuj wydarzenia" /> */}
  //       {/*  </ListItem> */}
  //       {/* </Link> */}
  //       {/* <Divider /> */}

  //       <LoggedIn
  //         LoggedInChildren={null}
  //         LoggedOutChildren={(
  //           <>
  //             <Link to={routes.ADD_WEBINAR.url}>
  //               <ListItem>
  //                 <ListItemText>Dodaj webinar</ListItemText>
  //               </ListItem>
  //             </Link>
  //             <Divider />
  //           </>
  //         )}
  //       />

  //       <LoggedIn
  //         LoggedInChildren={(
  //           <Grid item>
  //             <UserMenu />
  //           </Grid>
  //         )}
  //         LoggedOutChildren={(
  //           <>
  //             <Link to={routes.LOGIN.url}>
  //               <ListItem>
  //                 <ListItemText primary="Zaloguj" />
  //               </ListItem>
  //             </Link>
  //             <Divider />
  //             <Link to={routes.REGISTER.url}>
  //               <ListItem>
  //                 <ListItemText primary="Zarejestruj" />
  //               </ListItem>
  //             </Link>
  //           </>
  //         )}
  //       />
  //     </List>
  //   </MenuContainer>
  // </Container>
};
