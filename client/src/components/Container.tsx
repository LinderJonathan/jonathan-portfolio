import '../App.css'
import '../components/ContainerBlock'

import type {containerBlockProps} from "../components/ContainerBlock"
import ContainerBlock from '../components/ContainerBlock'

type containerProps = {
  pageMessage: string
  blocks: ({ id: string } & containerBlockProps)[]
}

function Container({pageMessage, blocks}: containerProps) {

  const renderedBlocks = []
  var blockIndex = 0

  for (const block of blocks) {
    renderedBlocks.push(
      <ContainerBlock 
        key={block.id} 
        description={block.description}
        title={block.title}
        subtitle={block.subtitle}
        imageSource={block.imageSource}
        align={blockIndex % 2 === 0 ? 'right' : 'left'}
      />
    )
    blockIndex++
  }
  
  return (
    <>
      <div className="containerMessage">
        <h1 className="pageMessage">{pageMessage}</h1>
      </div>
      <div className="container">
        {renderedBlocks}

      </div>
    </>
  )
}

export default Container