import '../components/ContainerBlock'
import '../components/Container'
import ContainerBlock from '../components/ContainerBlock'
import Container from '../components/Container'

function Portfolio() {
    return (
        <>
            <Container
                pageMessage='Past Projects'
                blocks={[
                {
                    id: '1',
                    description:'Project description 1',
                    imageSource:'../src/assets/profileCropped.jpg',
                    subtitle:'Project title 1'
                },
                {
                    id:'2',
                    description:'Project description 1',
                    imageSource:'../src/assets/profileCropped.jpg',
                    subtitle:'Project title 1'
                },
                {
                    id:'3',
                    description:'Project description 1',
                    imageSource:'../src/assets/profileCropped.jpg',
                    subtitle:'Project title 1'
                }

            ]}
            />
        </>
    )
}

export default Portfolio