import React from "react";

import { createFragmentContainer, graphql } from "react-relay";

import { View, Text } from "react-native";

const PersonCard = ({ person }) => {
  return (
    <View>
      <Text>Name: {person.name}</Text>
      <Text>Salary: {person.salary}</Text>
    </View>
  );
};

export default createFragmentContainer(PersonCard, {
  person: graphql`
    fragment PersonCard_person on Person {
      id
      name
      salary
    }
  `,
});
