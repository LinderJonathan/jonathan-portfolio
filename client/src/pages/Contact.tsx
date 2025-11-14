import '../components/Container'
import Container from '../components/Container'

function Contact() {
    return (
        <>
            <Container
                pageMessage='Contact me'
                blocks={[
                    {
                        id:'1',
                        description:'testing with only description'
                    },
                    {
                        id:'1',
                        description:'testing with only description'
                    },
                    {
                        id:'1',
                        description:'testing with only description'
                    }
                ]}

            />

        </>
    )
}

export default Contact