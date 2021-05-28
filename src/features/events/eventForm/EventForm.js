import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Confirm, Header, Segment } from 'semantic-ui-react';
import { listenToEvents } from '../EventsActions';
import { eventFormSchema } from './EventFormValidation';
import {
  TextArea,
  TextInput,
  SelectInput,
  DateInput,
  Loaders,
} from '../../../component/index';
import { categoryData } from '../../../app/api/categoryData';
import { useFirestoreDoc } from '../../../app/hooks/useFirestoreDoc';
import {
  addEventToFirestore,
  cancelEventToggle,
  listenToEventFromFirestore,
  updateEventInFirestore,
} from '../../../app/firestore/firestoreService';
import { toast } from 'react-toastify';

const EventForm = ({ match, history }) => {
  const selectedEvents = useSelector((state) =>
    state.events.events.find((eve) => eve.id === match.params.id),
  );
  const { loading, error } = useSelector((state) => state.async);
  const dispatch = useDispatch();
  const [cancelLoading, setCancelLoading] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const initialValues = selectedEvents ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    hostedBy: '',
    date: '',
  };

  const handleCancelToggle = async (event) => {
    setConfirmOpen(false);
    setCancelLoading(true);
    try {
      await cancelEventToggle(event);
      setCancelLoading(false);
    } catch (error) {
      setCancelLoading(true);
      toast.error(error.message);
    }
  };

  useFirestoreDoc({
    query: () => listenToEventFromFirestore(match.params.id),
    data: (event) => dispatch(listenToEvents([event])),
    deps: [match.params.id, dispatch],
    shouldExecute: !!match.params.id,
  });
  if (loading) return <Loaders content="Loading events ..." />;

  if (error) return <Redirect to="/error" />;

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            selectedEvents
              ? await updateEventInFirestore(values)
              : await addEventToFirestore(values);
            setSubmitting(false);
            history.push('/events');
          } catch (error) {
            toast.error(error.message);
            setSubmitting(false);
          }
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
            {selectedEvents && (
              <Button
                content={
                  selectedEvents.isCancelled
                    ? 'Reactivate Event'
                    : 'Cancel Event'
                }
                floated="left"
                color={selectedEvents.isCancelled ? 'green' : 'red'}
                onClick={() => setConfirmOpen(true)}
                type="button"
                loading={cancelLoading}
              />
            )}
            <Button
              type="submit"
              content="Submit"
              floated="right"
              color="green"
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
            />
            <Button
              content="Cancel"
              floated="right"
              as={Link}
              to="/events"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>

      <Confirm
        content={
          selectedEvents?.isCancelled
            ? 'Are you sure you want to reactive this event?'
            : 'Are you sure you want to cancell this event?'
        }
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => handleCancelToggle(selectedEvents)}
      />
    </Segment>
  );
};

export default EventForm;
