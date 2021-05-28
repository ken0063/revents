import cuid from 'cuid';
import { Formik, Form } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';
import user from '../../../utils/assets/user.png';
import { createEvents, updateEvents } from '../EventsActions';
import { eventFormSchema } from './EventFormValidation';
import {
  TextArea,
  TextInput,
  SelectInput,
  DateInput,
} from '../../../component/index';
import { categoryData } from '../../../app/api/categoryData';

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

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
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
        }}
        validationSchema={eventFormSchema}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form">
            <Header
              content={selectedEvents ? 'Edit the Event' : 'Create New Event'}
            />
            <Header sub color="teal" content="Event Details" />
            <TextInput name="title" placeholder="Event title" />
            <TextInput placeholder="Host name" name="hostedBy" />
            <SelectInput
              placeholder="Category"
              name="category"
              options={categoryData}
            />
            <TextArea placeholder="Description" name="description" rows={3} />
            <Header sub color="teal" content="Event Location" />
            <TextInput placeholder="City" name="city" />
            <TextInput placeholder="Venue" name="venue" />
            <DateInput
              placeholderText="Date"
              name="date"
              timeFormat="HH:mm"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyyy h:mm a"
            />
            <Button
              content="Cancel"
              floated="left"
              as={Link}
              to="/events"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              content="Submit"
              floated="right"
              color="green"
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default EventForm;
