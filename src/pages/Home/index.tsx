import { Play } from "@phosphor-icons/react";
import { Button } from "../../components/Button/styles";
import { HomeContainer, HomeHeader, HomeShadowCover } from "./styles";

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
    </HomeContainer>
  );
}
