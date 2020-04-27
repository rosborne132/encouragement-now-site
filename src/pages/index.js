import React from 'react'
import { Button } from 'styledoui'

import { Card, Layout } from '../components/Elements'
import { Container, Grid } from '../components/Utilities'

import BannerVideo from '../assets/videos/banner.mp4'

import '../styles/index.css'

const cards = [
    {
        icon: 'useralt',
        text: 'Sign up to receive texts from random users'
    },
    {
        icon: 'email',
        text: 'A random user will send there love'
    },
    {
        icon: 'mobile',
        text: 'Recieve words of encouragement along with a fun GIF'
    }
]

const width = 90

export default () => (
    <Layout>
        <section class="showcase">
            <div class="video-container">
                <video width="1920" autoPlay muted loop>
                    <source src={BannerVideo} type="video/mp4" />
                </video>
            </div>
            <header className="content">
                <Container width={width}>
                    <h1>Encouragement Now</h1>
                    <p>The biggest support network out there</p>
                    <Button
                        appearance="outline"
                        style={{ backgroundColor: '#fff', margin: '10px 0' }}
                    >
                        Sign Up
                    </Button>
                </Container>
            </header>
        </section>

        <section>
            <header>
                <h2>About</h2>
            </header>
            <Container width={width} style={{ textAlign: 'left' }}>
                <p>
                    Encouragement Now is an api that allows you to send words of
                    encouragement through SMS to those recovering from COVID-19.
                    Help us create a support group that includes everyone with a
                    mobile phone!
                </p>
            </Container>
        </section>

        <section>
            <Container width={width}>
                <header>
                    <h2>How does it work?</h2>
                </header>

                <Grid>
                    {cards.map(({ icon, text }) => (
                        <Card icon={icon} text={text} />
                    ))}
                </Grid>
            </Container>
        </section>

        <section>
            <Container width={width}>
                <p>
                    If you would like to send your love, text{' '}
                    <span className="code-block">6692732451</span>
                </p>
            </Container>
        </section>
    </Layout>
)
