import React from 'react'
import axios from 'axios'
import { Button, FormInput } from 'styledoui'

import { Card, Layout, Modal } from '../components/Elements'
import { Container, Grid } from '../components/Utilities'
import { cards } from '../data'
import BannerVideo from '../assets/videos/banner.mp4'

import '../styles/index.css'

const width = 90

export default () => {
    const [msg, setMsg] = React.useState({ msg: '', status: '' })
    const [modalState, setModalState] = React.useState(false)
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const clearForm = () => {
        setName('')
        setPhone('')
    }

    const onSubmit = async e => {
        e.preventDefault()
        setLoading(true)

        if (name.length === 0) {
            setMsg({ msg: 'Name is required', status: 'error' })
            setLoading(false)
            return
        }

        if (phone.length === 0) {
            setMsg({ msg: 'Phone is required', status: 'error' })
            setLoading(false)
            return
        }

        const user = { name, phone: phone.replace(/[^\d]/g, '') }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.GATSBY_API_KEY
            }
        }

        try {
            await axios.post(process.env.GATSBY_API_URL, user, config)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
            setMsg({ msg: 'User registered!', status: 'success' })
            clearForm()
        }
    }

    return (
        <Layout>
            <Modal isShowing={modalState} onClose={() => setModalState(false)}>
                <form onSubmit={onSubmit}>
                    <p style={{ fontSize: '16px', textAlign: 'left' }}>
                        Sign up to receive encouraging words from others.{' '}
                        <span role="img" aria-label="emoji">
                            &#128521;
                        </span>
                    </p>

                    <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
                        {msg.msg.length > 0 ? (
                            <div className={`msg ${msg.status}`}>{msg.msg}</div>
                        ) : (
                            ''
                        )}
                        <div style={{ padding: '0 0 10px' }}>
                            <FormInput
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Enter first name..."
                                className="input"
                            />
                        </div>

                        <div style={{ padding: '10px 0 20px' }}>
                            <FormInput
                                type="text"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="Enter phone number..."
                                className="input"
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
                                style={{
                                    backgroundColor: '#C94336',
                                    color: '#fff'
                                }}
                            >
                                Cancel
                            </Button>

                            <Button
                                appearance="secondary"
                                isLoading={loading}
                                isDisabled={loading}
                                type="submit"
                                style={{
                                    backgroundColor: '#3E6FAA',
                                    color: '#fff'
                                }}
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
                        <span className="code-block">669-273-2451</span>
                    </p>
                </Container>
            </section>
        </Layout>
    )
}
