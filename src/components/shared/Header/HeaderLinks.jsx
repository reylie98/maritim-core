/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from 'react'
// react components for routing our app without refresh
import { Link, navigate } from 'gatsby'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// @material-ui/icons
import { Apps } from '@material-ui/icons'

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx'
import Button from '../CustomButtons/Button.jsx'

import headerLinksStyle from '../../jss/maritim/components/headerLinksStyle.jsx'

import profileImage from '../../../images/faces/avatar.jpg'

import { FirebaseContext } from 'gatsby-plugin-firebase'

function HeaderLinks({ ...props }) {
    const { classes } = props
    const [isLoggedin, setLoggedIn] = React.useState(false)
    const [currentUser, setCurrentUser] = React.useState()
    const firebase = React.useContext(FirebaseContext)

    React.useEffect(() => {
        if (!firebase) {
            return
        }

        firebase.auth().onAuthStateChanged(function(user) {
            setLoggedIn(user ? true : false)
            setCurrentUser(user)
        })
    }, [firebase])

    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Categories"
                    buttonProps={{
                        className: classes.navLink,
                        color: 'transparent',
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link
                            to="/products?cat=energy"
                            className={classes.dropdownLink}
                        >
                            Energy
                        </Link>,
                        <Link
                            to="/products?cat=it"
                            className={classes.dropdownLink}
                        >
                            IT
                        </Link>,
                        <Link
                            to="/products?cat=biomedic"
                            className={classes.dropdownLink}
                        >
                            Biomedic
                        </Link>,
                        <Link
                            to="/products?cat=food"
                            className={classes.dropdownLink}
                        >
                            Food
                        </Link>,
                        <Link
                            to="/products?cat=others"
                            className={classes.dropdownLink}
                        >
                            Others
                        </Link>,
                    ]}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link
                    to="/about-us"
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    About us
                </Link>
            </ListItem>
            {isLoggedin && (
                <ListItem className={classes.listItem}>
                    <Link
                        to="/submit-idea"
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        Submit your idea!
                    </Link>
                </ListItem>
            )}
            {isLoggedin && (
                <ListItem className={classes.listItem}>
                    <Link
                        to="/my-ideas"
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        My ideas
                    </Link>
                </ListItem>
            )}

            {!isLoggedin ? (
                <ListItem className={classes.listItem}>
                    <Button
                        component={Link}
                        to="/login"
                        className={classes.registerNavLink}
                        color="rose"
                        round
                    >
                        Login
                    </Button>
                </ListItem>
            ) : (
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        left
                        caret={false}
                        hoverColor="primary"
                        dropdownHeader={`Hi, ${currentUser &&
                            currentUser.displayName}`}
                        buttonText={
                            <img
                                src={profileImage}
                                className={classes.img}
                                alt="profile"
                            />
                        }
                        onClick={action => {
                            console.log(action)
                            switch (action) {
                                case 'My profile':
                                    navigate('my-profile')
                                    break
                                case 'Sign out':
                                    console.log('hi')
                                    if (firebase) {
                                        firebase
                                            .auth()
                                            .signOut()
                                            .then(() => {
                                                setLoggedIn(false)
                                            })
                                    }
                                    break
                                default:
                                    break
                            }
                        }}
                        buttonProps={{
                            className:
                                classes.navLink +
                                ' ' +
                                classes.imageDropdownButton,
                            color: 'transparent',
                        }}
                        dropdownList={['My profile', 'Sign out']}
                    />
                </ListItem>
            )}
        </List>
    )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
