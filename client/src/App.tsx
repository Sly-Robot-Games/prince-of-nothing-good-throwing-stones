import { StoneList } from './components/stone-list';

function App() {

  return (
    <>
      <StoneList />
    </>
  )
}

export default App


/**
 * Notes to self / To Do:
 * 
 * draw canvas with leaf as background, place stones based on RNG center points
 * need to decide sizes of mat to stone to unforgiving
 * 
 * collision detection for unforgiving sphere increasing
 * pass selected stone information to canvas (add state store)
 * fade in animations on stones?
 * 
 */
