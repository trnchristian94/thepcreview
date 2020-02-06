import React from "react";
import Card from "react-bootstrap/Card";

interface IProps {
  contacts: any;
}

export default function Contacts({ contacts }: IProps) {
  return (
    <div>
      <h1>Contact List</h1>
      {contacts.map(
        (contact: {
          name: React.ReactNode;
          email: React.ReactNode;
          company: { catchPhrase: React.ReactNode };
        }) => (
          <Card>
            <Card.Body>
              <Card.Title>{contact.name}</Card.Title>
              <Card.Subtitle>{contact.email}</Card.Subtitle>
              <Card.Text>{contact.company.catchPhrase}</Card.Text>
            </Card.Body>
          </Card>
        )
      )}
    </div>
  );
}
