/*
TODO 12:
Create the entire Header component.
 
Requirements:
- Show the title prop in an h1
- Show a one-sentence description
- Show the current search term somewhere in the header
*/
 
export default function Header({ title, searchTerm }) {
  // TODO:
  // Replace return null with your JSX
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>Search for your favorite movies and add them to your watchlist!</p>
      {searchTerm && <p className="searchTerm">Current search: {searchTerm}</p>}
    </header>
  );
}
