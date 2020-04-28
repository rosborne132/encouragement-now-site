import React from 'react'
import { Button, FormInput } from 'styledoui'

import { Card, Layout, Modal } from '../components/Elements'
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

export default () => {
    const [modalState, setModalState] = React.useState(false)
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const onSubmit = e => {
        e.preventDefault()
        console.log('Hello')

        // Get values

        // Make request to api

        // display results
    }

    return (
        <Layout>
            <Modal isShowing={modalState} onClose={() => setModalState(false)}>
                <form onSubmit={onSubmit}>
                    <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
                        <div style={{ padding: '0 0 10px' }}>
                            <FormInput
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Enter name..."
                                className="input"
                                required
                            />
                        </div>
                        <div style={{ padding: '10px 0 20px' }}>
                            <FormInput
                                type="text"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="Enter phone number..."
                                className="input"
                                required
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Button
                                appearance="primary"
                                isLoading={loading}
                                isDisabled={loading}
                                onClick={() => setModalState(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                appearance="secondary"
                                isLoading={loading}
                                isDisabled={loading}
                                type="submit"
                            >
                                Register
                            </Button>
                        </div>
                    </fieldset>
                </form>
            </Modal>

            <section class="showcase">
                <div class="video-container">
                    <video autoPlay muted loop>
                        <source src={BannerVideo} type="video/mp4" />
                    </video>
                </div>
                <header className="content">
                    <Container width={width}>
                        <h1>Encouragement Now</h1>
                        <p>The biggest support network out there</p>
                        <Button
                            style={{
                                backgroundColor: '#fff',
                                margin: '10px 0'
                            }}
                            onClick={() => setModalState(true)}
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
                        Encouragement Now is an api that allows you to send
                        words of encouragement through SMS to those recovering
                        from COVID-19. Help us create a support group that
                        includes everyone with a mobile phone!
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
}
