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
                    id: '2',
                    description:'In a 6 month collaboration with AstraZeneca as as master thesis worker, I explored how Large Language Models tuned for molecular discovery could benefit from contrastive learning',
                    subtitle:'AstraZeneca collaboration: Contrastive Learning for Molecular Representation'
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