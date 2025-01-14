import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
import PostComments from './pages/PostComments';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={<Posts />}>
          {/* Вложенный роут для отображения комментариев */}
          <Route path="comments/:postId" element={<PostComments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
