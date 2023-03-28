import { CalendarBlank, MapPin, Wallet } from "@phosphor-icons/react";
import { Button } from "../Button/styles";
import { FormGroup, SearchFormContainer } from "./styles";

export function SearchDestination() {
  return (
    <SearchFormContainer>
      <FormGroup>
        <label htmlFor="location">
          <MapPin size={28} weight="fill" />
        </label>

        <select id="location" placeholder="Location">
          <option value=""></option>
          <option value="brazil">Brazil</option>
        </select>
      </FormGroup>

      <FormGroup>
        <label htmlFor="budget">
          <Wallet size={28} weight="fill" />
        </label>

        <select id="budget">
          <option value=""></option>
          <option value="500a1000">$500 ~ $1000</option>
        </select>
      </FormGroup>

      <FormGroup>
        <label htmlFor="date">
          <CalendarBlank size={28} weight="fill" />
        </label>

        <input type="date" id="date" />
      </FormGroup>

      <Button variant="secondary">Search</Button>
    </SearchFormContainer>
  );
}
