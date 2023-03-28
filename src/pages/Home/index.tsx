import { Play } from "@phosphor-icons/react";
import { Container } from "../../assets/styles/Globa";
import { Button } from "../../components/Button/styles";
import { NumberCounter } from "../../components/NumberCounter";
import { SearchDestination } from "../../components/SearchDestination";
import {
  HomeContainer,
  HomeHeader,
  HomeNumberCounter,
  HomeSearchDestination,
  HomeShadowCover,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <HomeShadowCover>
          <h1>Uncover Hidden Gems with Us</h1>
          <h3>
            Discover the best travel destinations and create unforgettable
            experiences
          </h3>

          <div>
            <Button variant="primary">Let's Explore</Button>
            <Button variant="default">
              <Play size={24} weight="fill" /> Watch Video
            </Button>
          </div>
        </HomeShadowCover>
      </HomeHeader>

      <HomeNumberCounter>
        <Container id="counterContainer">
          <NumberCounter numberTitle="Years of Experience" numberValue={10} />
          <NumberCounter numberTitle="Best Destinations" numberValue={2001} />
          <NumberCounter numberTitle="Happy Constumer" numberValue={10000} />
          <NumberCounter numberTitle="Overall Rating" numberValue={4.7} />
        </Container>
      </HomeNumberCounter>

      <HomeSearchDestination>
        <Container id="searchDestinationContainer">
          <h4>Explore your dream place</h4>
          <h2>Find Your Dream Destination</h2>
          <p>
            Find Your Perfect Destination - The Ultimate Guide to Your Dream
            Destination
          </p>

          <form action="/">
            <SearchDestination />
          </form>
        </Container>
      </HomeSearchDestination>
    </HomeContainer>
  );
}
