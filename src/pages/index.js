import React from 'react'

import { Card, Layout } from '../components/Elements'
import { Container, Grid } from '../components/Utilities'

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
        <header>
            <Container width={width}>
                <h1>Encouragement Now</h1>
            </Container>
        </header>

        <section style={{ width: '100%' }}>
            <Container width={width}>
                <h2>How does it work?</h2>

                <Grid>
                    {cards.map(({ icon, text }) => (
                        <Card icon={icon} text={text} />
                    ))}
                </Grid>
            </Container>
        </section>
    </Layout>
)
