import cuid from 'cuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import user from '../../../utils/assets/user.png';
import { createEvents, updateEvents } from '../EventsActions';

const EventForm = ({ match, history }) => {
  const selectedEvents = useSelector((state) =>
    state.events.events.find((eve) => eve.id === match.params.id),
  );
  const dispatch = useDispatch();

  const initialValues = selectedEvents ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    hostedBy: '',
    date: '',
  };
  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = () => {
    selectedEvents
      ? dispatch(updateEvents({ ...selectedEvents, ...values }))
      : dispatch(
          createEvents({
            ...values,
            id: cuid(),
            hostPhotoURL: user,
            attendees: [],
          }),
        );

    history.push('/events');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Segment clearing>
      <Header content="Create New Event" />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event title"
            value={values.title}
            name="title"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Host name"
            value={values.hostedBy}
            name="hostedBy"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            value={values.category}
            name="category"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            value={values.description}
            name="description"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            value={values.city}
            name="city"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            value={values.venue}
            name="venue"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            value={values.date}
            name="date"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button content="Cancel" floated="left" as={Link} to="/events" />
        <Button type="submit" content="Submit" floated="right" color="green" />
      </Form>
    </Segment>
  );
};

export default EventForm;
