const server = 'https://5ff86cd110778b001704348e.mockapi.io/api/v1/events';

export const createEvent = events => {
  return fetch(server, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(events),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to create event');
    }
  });
};

export const fetchEvents = () => {
  return fetch(server)
    .then(res => {
      if (!res.ok) {
        throw new Error('Internal Server Error. Cannot display events');
      }
      return res.json();
    })
    .then(events =>
      events.map(({ _id, dateFrom, dateTo, ...event }) => ({
        id: _id,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...event,
      })),
    );
};

export const updateEvent = (id, updatedData) => {
  return fetch(`${server}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to update event');
    }
  });
};

export const deleteEvent = id => {
  return fetch(`${server}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to delete task');
    }
  });
};
