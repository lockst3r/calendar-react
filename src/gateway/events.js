const server = "https://5ff86cd110778b001704348e.mockapi.io/api/v1/events";

export const createEvent = (events) => {
  fetch(server, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(events),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Faild to create event");
    }
  });
};

export const fetchEvents = () => {
  return fetch(server)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((events) =>
      events.map(({ _id, dateFrom, dateTo, ...event }) => ({
        id: _id,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...event,
      }))
    );
};

export const updateEvent = (id, updatedData) => {
  return fetch(`${server}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData),
  });
};

export const deleteEvent = (id) => {
  return fetch(`${server}/${id}`, {
      method: 'DELETE'
    });
  }




const events = [
  {
    id: 1,
    title: "Go to the gym",
    description: "some text here",
    dateFrom: new Date(2021, 1, 7, 10, 15),
    dateTo: new Date(2021, 1, 7, 15, 0),
    statusEvent: false,
  },
  {
    id: 2,
    title: "Go to the school",
    description: "hello, 2 am",
    dateFrom: new Date(2021, 1, 3, 10, 15),
    dateTo: new Date(2021, 1, 3, 11, 20),
    statusEvent: false,
  },
  {
    id: 3,
    title: "Lunch",
    description: "",
    dateFrom: new Date(2021, 1, 1, 10, 30),
    dateTo: new Date(2021, 1, 1, 11, 30),
    statusEvent: false,
  },
  {
    id: 4,
    title: "Meet friend",
    description: "at the cafe",
    dateFrom: new Date(2021, 1, 2, 10, 30),
    dateTo: new Date(2021, 1, 2, 11, 40),
    statusEvent: false,
  },
];

export default events;
