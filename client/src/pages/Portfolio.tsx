import '../components/ContainerBlock'
import '../components/Container'
import Container from '../components/Container'
import microSensorSquareImg from '../assets/microSensorNetSquare.png'
import profileCroppedImg from '../assets/profileCropped.jpg'
import azImg from '../assets/profileCropped.jpg'

function Portfolio() {
    return (
        <>
            <Container
                pageMessage='Past Projects'
                blocks={[
                {
                    id: '1',
                    description: 'In a 6 month collaboration with AstraZeneca as as master thesis worker, I explored how Large Language Models tuned for molecular discovery could benefit from contrastive learning',
                    link: 'https://google.com',
                    imageSource: azImg,
                    title: 'AstraZeneca collaboration: ',
                    subtitle: 'Contrastive Learning for Molecular Representation',
                },
                {
                    id:'2',
                    description:'MicroSensorNet is a embedded project to prototype a sports clock application. Using Pytorch and pandas to train a classification model based on gyroscope (x, y, z) acceleration data to classify physical movement, neural network weights were extracted. A custom feed forward neural network was then implemented in C++ for fast, high accuracy inference.',
                    imageSource: microSensorSquareImg,
                    title: 'MicroSensorNet: ',
                    subtitle:'Physical Activity Classifcation with C++ Inference'
                },
                {
                    id:'3',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium necessitatibus inventore perferendis iusto omnis nam debitis ea modi nesciunt magnam praesentium, voluptatum magni quod! Cumque nobis deleniti eos dolor?',
                    imageSource:profileCroppedImg,
                    subtitle:'Project title 3'
                }

            ]}
            />
        </>
    )
}

export default Portfolio