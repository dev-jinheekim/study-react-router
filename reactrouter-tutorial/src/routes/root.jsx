import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input 
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            />
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`contacts/1`}>Jinhee Kim</a>
            </li>
            <li>
              <a href={`contacts/2`}>JiKang Um</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}