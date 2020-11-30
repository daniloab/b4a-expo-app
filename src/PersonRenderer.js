import React from "react";
import { QueryRenderer } from "react-relay";
import Environment from "./relay/Environment";
import PersonCard from "./PersonCard";
import { View, Text } from "react-native";

const PersonRenderer = () => {
  const renderPersons = (people) => {
    return people.edges.map(({ node }) => <PersonCard person={node} />);
  };

  return (
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query PersonRendererQuery {
          people {
            edges {
              node {
                ...PersonCard_person
              }
            }
          }
        }
      `}
      variables={null}
      render={({ error, props }) => {
        if (error) {
          return (
            <View>
              <Text>{error.message}</Text>
            </View>
          );
        } else if (props) {
          return renderPersons(props.people);
        }
        return (
          <View>
            <Text>loading</Text>
          </View>
        );
      }}
    />
  );
};

export default PersonRenderer;
