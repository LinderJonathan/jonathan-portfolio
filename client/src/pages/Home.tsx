import '../components/Container'
import Container from '../components/Container'

function Home() {
    return (
        <>
            <Container
                pageMessage='Hi, Im Jonathan'
                blocks={[
                    {
                        id:'1',
                        description:'testing with only description'
                    }
                ]}

            />

        </>
    )
}

export default Home