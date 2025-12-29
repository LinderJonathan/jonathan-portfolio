import Container from '../components/Container'
import profilePicture from '../assets/profileCropped.jpg'
function Home() {
    return (
        <>
            <Container
                blocks={[
                    {
                        id: '1',
                        header: 'Hi, I am Jonathan',
                        isCentered: false,
                        align: 'right',
                        description:'... And I am a software developer. I am 25 years old from Huskvarna, Sweden and in 2020 I relocated to Gothenburg in to pursue computer science at Chalmers University of Technology. Since then I have graduated with a B.Sc. in Computer Science and Engineering, and a M.Sc. in algorithms, logic and programming languages. Althoug working with software, at heart I am a problem solver, and hold a great interest in science and everything tech-related',
                        imageSource: profilePicture,
                        imageStyle: {
                            maxHeight: '500px',
                            maxWidth: '500px',
                            aspectRatio: '1 / 1',
                            borderRadius: '100%',
                            objectFit: 'cover',
                            width: '100%',
                        }
                    },
                    {
                        id: '2',
                        header: 'Embedded Software Development',
                        isCentered: false,
                        align: 'left',
                        description: 'Through my academic work I aquired an interest for building robust, maintainable software that resides close to hardware. As of autumn 2025, Ive embarked with Combitech Sverige as a SWE consultant working with Ericsson as a software developer for 5G (C). Developing on an end-to-end level,  not only do I have I gotten the opportunity to implement robust, high-performance software, but also assisting in early development and assuring isolated- and complete feature verification.'
                    },
                    {
                        id: '3',
                        header: 'Journey of Learning',
                        isCentered: false,
                        align: 'right',
                        description: 'Software, hardware and the IOT is ever-changing. By this notion I hold the act of learning in a very high regard. From building embedded software applications for 5G, to investigating how LLMs can be tuned for drug discovery through academic work at AstraZeneca, I have gained- and applied a varied set of skills in industry environments. Having been exposed to several diffferent fields, not only do I strive to widen my knowledge but to at the same time excel in a narrow, focused area, today being embedded development'
                    }
                ]}

            />

        </>
    )
}

export default Home