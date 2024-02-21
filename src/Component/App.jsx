import { lazy, Suspense } from "react";

const ContactForm = lazy(() => import("./ContactForm/ContactForm"));
const ContactList = lazy(() => import("./ContactList/ContactList"));
const SearchForm = lazy(() => import("./SearchForm/SearchForm"));

export default function App() {
  return (
    <div>
      <Suspense fallback={ <div>Loading...</div> }>
        <h1>Phonebook</h1>
      <ContactForm />
      <SearchForm />
      <ContactList />
      </Suspense>
      
    </div>
  );
}