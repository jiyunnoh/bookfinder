import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';

// For resume update!!!!!!!
// TODO: When the search button is clicked, update the url with the info of input,
// so that when the user comes back from the detail page, it can still show the previous result, instead of blank page.
// TODO: max-result -> 40. pagination. each page shows 10 results.
// TODO: On search input, display the last 10 search queries.
// TODO: Include tests cases using tools like Jest, Enzyme, etc.
// TODO: Use Accessibility techniques (i.e. a11ly) to improve your site for users with impairments (see A11Y Project)
// TODO: Create a bookshelf for the users that stores bookmarked books.

function App() {
  return (
    <div>
      <Header />
      <CardContainer />
    </div>
  );
}

export default App;
