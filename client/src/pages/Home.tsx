import Container from '../components/Container'

function Home() {
    return (
        <>
            <Container
                blocks={[
                    {
                        id: '1',
                        header: 'Hi, Im Jonathan',
                        isCentered: true,
                        description:'... And I am 25 years old from Huskvarna, Sweden. With a great interest in technology and sense of problem solving, I Relocated in 2020 to Gothenburg to pursue Computer Science and Engineering at Chalmers University of Technology. Having graduated with a B.Sc. in computer science and M.Sc. in algorithms and logic...'
                    },
                    {
                        id: '2',
                        header: '... Software Engineering...',
                        isCentered: true,
                        description:''
                    },
                    {
                        id: '3',
                        header: '... Embedded Development...',
                        isCentered: true,
                        description: ''
                    }
                ]}

            />

        </>
    )
}

export default Home