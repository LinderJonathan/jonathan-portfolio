import '../components/ContainerBlock'
import '../components/Container'
import Container from '../components/Container'
import microSensorSquareImg from '../assets/microSensorNet.png'
import profileCroppedImg from '../assets/profileCropped.jpg'
import azImg from '../assets/az_test.png'

function Portfolio() {
    return (
        <>
            <Container
                pageMessage='Past Projects'
                blocks={[
                {
                    id: '1',
                    description: 'In a 6 month collaboration with AstraZeneca as as master thesis worker, I explored how Large Language Models tuned for molecular discovery could benefit from contrastive learning. Learn more',
                    link: 'https://google.com',
                    imageSource: azImg,
                    title: 'AstraZeneca collaboration: ',
                    subtitle: 'Contrastive Learning for Molecular Representation (M.Sc. Thesis)',
                },
                {
                    id:'2',
                    description:'MicroSensorNet is a embedded project to prototype a sports clock application. Using Pytorch and pandas to train a classification model based on gyroscope (x, y, z) acceleration data to classify physical movement, neural network weights were extracted. A custom feed forward neural network was then implemented in C++ for fast, high accuracy inference. Learn more',
                    imageSource: microSensorSquareImg,
                    title: 'MicroSensorNet: ',
                    subtitle:'Physical Activity Classifcation with C++ Inference'
                },
                {
                    id:'3',
                    description:'',
                    imageSource: "",
                    title: 'J-Shell',
                    subtitle:'Self-built shell user-space (ongoing)'
                }

            ]}
            />
        </>
    )
}

export default Portfolio