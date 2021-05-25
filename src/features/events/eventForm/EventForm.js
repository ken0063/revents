import React from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

const EventForm = ({ formOpen, setFormOpen }) => {
  return (
    <Segment clearing>
      <Header content="Create New Event" />
      <Form>
        <Form.Field>
          <input type="text" placeholder="Event title" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <input type="date" placeholder="Date" />
        </Form.Field>
        <Button
          type="submit"
          content="Cancel"
          floated="left"
          onClick={() => setFormOpen(!formOpen)}
        />
        <Button type="submit" content="Submit" floated="right" color="green" />
      </Form>
    </Segment>
  );
};

export default EventForm;
