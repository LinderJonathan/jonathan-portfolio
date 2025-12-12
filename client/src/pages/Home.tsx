import Container from '../components/Container'

function Home() {
    return (
        <>
            <Container
                blocks={[
                    {
                        id: '1',
                        header: 'Hi, I am Jonathan',
                        isCentered: false,
                        description:''
                    },
                    {
                        id: '2',
                        header: 'Software Engineer...',
                        isCentered: false,
                        description: ''
                    },
                    {
                        id: '3',
                        header: '...Embedded Programming',
                        isCentered: false,
                        description: ''
                    }
                ]}

            />

        </>
    )
}

export default Home