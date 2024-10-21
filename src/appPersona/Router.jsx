import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pagesPersona/Home';
import PeopleList from '../pagesPersona/PeopleList';
import AddPerson from '../pagesPersona/AddPerson';
import UpdatePerson from '../pagesPersona/UpdatePerson';
// import Layout from '../components/Layout';

function Router() {
  return (
    <BrowserRouter>
    {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<PeopleList />} />
        <Route path="/people/new" element={<AddPerson />} />
        <Route path="/people/update" element={<UpdatePerson />} />
      </Routes>
    {/* </Layout> */}
    </BrowserRouter>
  );
}

export default Router;