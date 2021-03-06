import React from 'react'

import { Link, navigate } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'

import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import Energy from '@material-ui/icons/Autorenew'
import Biomedic from '@material-ui/icons/NaturePeople'
import IT from '@material-ui/icons/DevicesOther'
import Food from '@material-ui/icons/Fastfood'
import Other from '@material-ui/icons/CardGiftcard'

import GridContainer from '../components/shared/Grid/GridContainer.jsx'
import GridItem from '../components/shared/Grid/GridItem.jsx'

import Button from '../components/shared/CustomButtons/Button.jsx'
import Parallax from '../components/shared/Parallax/Parallax.jsx'
import NavPillsStatic from '../components/shared/NavPillsStatic/NavPillsStatic.jsx'

import landingPageStyle from '../components/jss/maritim/views/landingPage.jsx'

import AboutSection from './home/_about-section.js'
import ProductSection from './home/_product-section.js'
import WorkSection from './home/_work-section.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const IndexPage = ({ classes }) => (
    <Layout>
        <SEO title="Home" />
        <div>
            <Parallax filter image={require('../images/bg7.jpg')}>
                <GridContainer className={classes.container}>
                    <GridContainer className={classes.container}>
                        <GridItem xs={12} sm={12} md={12}>
                            <h1 className={classes.title}>
                                Your Innovations Starts With Us.
                            </h1>
                            <h4 className={classes.titleSecondary}>
                                We publish your innovation to help investor peek
                                at your innovation and communicate with you. We
                                believe Indonesia is a country full of inventor
                                and it will help its glory because of you too!.
                            </h4>
                            <br />
                            <Button
                                component={Link}
                                color="danger"
                                size="lg"
                                to="/products"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLightbulb} />
                                Peek all innovation
                            </Button>
                        </GridItem>
                    </GridContainer>
                    <GridContainer className={classes.container}>
                        <GridItem xs={12} sm={12} md={12}>
                            <h2 className={classes.title2}>
                                Or choose by categories
                            </h2>
                            <NavPillsStatic
                                alignCenter
                                tabs={[
                                    {
                                        tabButton: 'Energy',
                                        tabIcon: Energy,
                                        color: 'success',
                                        onClick: () => {
                                            navigate('/products?cat=energy')
                                        },
                                    },
                                    {
                                        tabButton: 'IT',
                                        tabIcon: IT,
                                        color: 'warning',
                                        onClick: () => {
                                            navigate('/products?cat=it')
                                        },
                                    },
                                    {
                                        tabButton: 'Biomedic',
                                        tabIcon: Biomedic,
                                        color: 'danger',
                                        onClick: () => {
                                            navigate('/products?cat=biomedic')
                                        },
                                    },
                                    {
                                        tabButton: 'Food',
                                        tabIcon: Food,
                                        color: 'rose',
                                        onClick: () => {
                                            navigate('/products?cat=food')
                                        },
                                    },
                                    {
                                        tabButton: 'Others',
                                        tabIcon: Other,
                                        color: 'info',
                                        onClick: () => {
                                            navigate('/products?cat=others')
                                        },
                                    },
                                ]}
                            />
                        </GridItem>
                    </GridContainer>
                </GridContainer>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <AboutSection />
                    <ProductSection />
                    <WorkSection />
                </div>
            </div>
        </div>
    </Layout>
)

IndexPage.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(landingPageStyle)(IndexPage)
