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
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium necessitatibus inventore perferendis iusto omnis nam debitis ea modi nesciunt magnam praesentium, voluptatum magni quod! Cumque nobis deleniti eos dolor?',
                    imageSource:'../src/assets/profileCropped.jpg',
                    subtitle:'Project title 1'
                },
                {
                    id:'2',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium necessitatibus inventore perferendis iusto omnis nam debitis ea modi nesciunt magnam praesentium, voluptatum magni quod! Cumque nobis deleniti eos dolor?',
                    imageSource:'../src/assets/profileCropped.jpg',
                    subtitle:'Project title 2'
                },
                {
                    id:'3',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium necessitatibus inventore perferendis iusto omnis nam debitis ea modi nesciunt magnam praesentium, voluptatum magni quod! Cumque nobis deleniti eos dolor?',
                    imageSource:'../src/assets/profileCropped.jpg',
                    subtitle:'Project title 3'
                }

            ]}
            />
        </>
    )
}

export default Portfolio