import '../components/Container'
import Container from '../components/Container'

function Contact() {
    return (
        <>
            <Container
                blocks={[
                    {
                        id: '1',
                        header: '',
                        isCentered: true,
                        description:
                        <>
                                <a href="/jonathan-portfolio/CV.pdf">
                                    CV
                                </a>
                        </>
                    },
                ]}

            />

        </>
    )
}

export default Contact