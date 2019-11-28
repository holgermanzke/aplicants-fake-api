import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 5px 5px 0 5px;
  background: ${props => props.theme.text};
  color: ${props => props.theme.secondary};
  border-radius: 10px;
`;

export default function Applicant({ name, profession, experience }) {
  return (
    <Container>
      <div>{name}</div>
      <div>{profession}</div>
      <div>{experience}</div>
    </Container>
  );
}
Applicant.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
  experience: PropTypes.number
};
