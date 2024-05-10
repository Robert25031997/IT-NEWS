import React from "react";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import NewsCardList from "../components/NewsCardList";
import { Link } from "react-router-dom";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsList } from "../api/adaptors";

export default function Home() {
  //   generez endpointurile pt categoriile de stiri
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  const footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 6);
  const booksNewsEndpoint = getNewsCategoriesEndpoint("books", 1,6);
  //   fetch date de la The Guardian
  const technologyData = useFetch(technologyNewsEndpoint);
  const footballData = useFetch(footballNewsEndpoint);
  const booksData = useFetch(booksNewsEndpoint);

  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedFootballData = getNewsList(footballData);
  const adaptedBooksData = getNewsList(booksData);

  return (
    <Layout>
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Technology</h1>
          {/* afisez stirile despre tehnologie */}
          <NewsCardList newsList={adaptedTechnologyData} />
          <p>
            Vezi toate stirile legate de tehnologie:{" "}
            <Link to={"/category/tehnology"} className="text-secondary">
              Aici
            </Link>
          </p>
        </Container>
      </section>
      <section className="football my-5">
        <Container>
          <h1 className="mb-5 pt-3">Football</h1>
          {/* afisez stirile despre tehnologie */}
          <NewsCardList newsList={adaptedFootballData} />
          <p>
            Vezi toate stirile legate de fotbal:{" "}
            <Link to={"/category/football"} className="text-secondary">
              Aici
            </Link>
          </p>
        </Container>
      </section>
      <section className="books my-5">
        <Container>
          <h1 className="mb-5 pt-3">Books</h1>
          <NewsCardList newsList={adaptedBooksData } />
          <p>Vezi toate stirile legate de Books in sectiunea:{" "}
          <Link to={"/category/books"} className="text-secondary">Books</Link>{" "}
          </p>
        </Container>
      </section>
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>Vrei sa salvezi stirile favorite pentru a le citi mai incolo?</p>
          <p>In cadrul fiecarei stiri gasesti un buton prin care poti adauga stirea la favorite</p>
          <p className="pb-3">
            Viziteaza sectiunea{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>{" "}
            pentru a vedea stirile adaugate ca si favorite
          </p>
        </Container>
      </section>
    </Layout>
  );
}
