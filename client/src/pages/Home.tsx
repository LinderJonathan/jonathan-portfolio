import Container from '../components/Container'

function Home() {
    return (
        <>
            <Container
                pageMessage='Hi, Im Jonathan'
                blocks={[
                    {
                        id: '1',
                        header: 'Software Engineering',
                        isCentered: true,
                        description:''
                    },
                    {
                        id: '2',
                        header: 'Embedded Development',
                        isCentered: true,
                        description: ''
                    }
                ]}

            />

        </>
    )
}

export default Home