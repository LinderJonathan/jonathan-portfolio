import { NavLink } from "react-router-dom"
import '../components/ContainerBlock'
import '../components/Container'
import Container from '../components/Container'
import microSensorSquareImg from '../assets/microSensorNet.png'
import azImg from '../assets/az_test.png'
import jShellImg from '../assets/jshell.png'

function Portfolio() {
    return (
        <>
            <Container
                pageMessage='Past Projects'
                blocks={[
                {
                    id: '1',
                    description:
                    (
                        <>
                        In a 6 month collaboration with AstraZeneca as as master thesis worker, I explored how Large Language Models tuned for molecular discovery could benefit from contrastive learning.
                        <NavLink 
                        to="https://github.com/LinderJonathan/MicroSensorNet" 
                        style={{
                            borderBottom: "2px solid white",
                        }}> Learn More.</NavLink>
                        </>
                            ),
                    align: 'right',
                    imageSource: azImg,
                    title: 'AstraZeneca collaboration: ',
                    subtitle: 'Contrastive Learning for Molecular Representation (M.Sc. Thesis)',
                },
                {
                    id:'2',
                    description:
                    (
                        <>
                        MicroSensorNet is a embedded project to prototype a sports clock application. Using Pytorch and pandas to train a classification model based on gyroscope (x, y, z) acceleration data to classify physical movement, neural network weights were extracted. A custom feed forward neural network was then implemented in C++ for fast, high accuracy inference. <NavLink
                        to="https://github.com/LinderJonathan/MicroSensorNet"
                        style={{
                            borderBottom: "2px solid white"
                        }}>Learn More.</NavLink>
                        </>
                        ),
                    align: 'left',
                    imageSource: microSensorSquareImg,
                    title: 'MicroSensorNet: ',
                    subtitle:'Physical Activity Classifcation with C++ Inference'
                },
                {
                    id:'3',
                    description:
                    (
                        <>
                        jshell is a lightweight Unix-style shell written in C, developed to explore low-level systems programming concepts. The project implements process creation and execution using fork/exec, basic command parsing, built-in command handling, and error management via POSIX APIs. The project provides practical experience regarding OS fundamentals. <NavLink
                        to="https://github.com/LinderJonathan/jshell"
                        style={{
                            borderBottom: "2px solid white"
                        }}>Learn More.</NavLink>
                        </>        
                        ),
                    align: 'right',
                    imageSource: jShellImg,
                    title: 'J-Shell',
                    subtitle:'Self-built shell user-space (ongoing)'
                }

            ]}
            />
        </>
    )
}

export default Portfolio