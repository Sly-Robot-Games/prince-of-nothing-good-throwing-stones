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
 * need to add assets to stone map once svgs/pngs/images acquired
 * need to add leaf logo to title
 * 
 * draw canvas with leaf as background, place stones based on RNG center points
 * need to decide sizes of mat to stone to unforgiving
 * 
 * collision detection for unforgiving sphere increasing
 * pass selected stone information to canvas (add state store)
 * fade in animations on stones?
 * 
 */
