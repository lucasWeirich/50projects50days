import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../views/Home/Home.view';
import NotFound404 from '../views/NotFound404/NotFound404.view';

export default function RoutesPage() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView title="All Projects - FrontEnd" />} />
        <Route path='/project01' element={<Project01 title="Project 01 - Expanding Cards" />} />
        <Route path='/project02' element={<Project02 title="Project 02 - Progress Steps" />} />
        <Route path='/project03' element={<Project03 title="Project 03 - Blurry Loading" />} />
        <Route path='/project04' element={<Project04 title="Project 04 - Scroll Animation" />} />
        <Route path='/project05' element={<Project05 title="Project 05 - Form Input Wave" />} />
        <Route path='/project06' element={<Project06 title="Project 06 - Sound Board" />} />
        <Route path='/project07' element={<Project07 title="Project 07 - Random Jokes" />} />
        <Route path='/project08' element={<Project08 title="Project 08 - Random Choice Picker" />} />
        <Route path='*' element={<NotFound404 title="Not Found - 404" />} />
      </Routes>
    </BrowserRouter>
  </>
}

/* Import of all projects */
import Project01 from '../projects/Project01/Project01';
import Project02 from '../projects/Project02/Project02';
import Project03 from '../projects/Project03/Project03';
import Project04 from '../projects/Project04/Project04';
import Project05 from '../projects/Project05/Project05';
import Project06 from '../projects/Project06/Project06';
import Project07 from '../projects/Project07/Project07';
import Project08 from '../projects/Project08/Project08';