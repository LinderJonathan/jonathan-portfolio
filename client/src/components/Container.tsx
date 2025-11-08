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
        subtitle={block.subtitle}
        imageSource={block.imageSource}
        align={blockIndex % 2 === 0 ? 'left' : 'right'}
      />
    )
    blockIndex++
  }
  
  return (
    <>
      <div className="container">
        <h1 id="message" className="pageMessage">{pageMessage}</h1>
        {renderedBlocks}

      </div>
    </>
  )
}

export default Container