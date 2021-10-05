const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');
const error = {
  error: 'id must be a positive integer'
};

// Allows server to intake user json
app.use(express.json());

// Handles GET for data array
app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const property in data.notes) {
    dataArray.push(data.notes[property]);
  }
  res.json(dataArray);
});

// Handles specific GET routes
app.get('/api/notes/:id', (req, res) => {
  if (!(req.params.id > 0)) {
    res.status(400).json(error);
  } else {
    if (data.notes[req.params.id] === undefined) {
      const missingError = {
        error: 'cannot find note with id ' + req.params.id
      };
      res.status(404).json(missingError);
    } else {
      res.json(data.notes[req.params.id]);
    }

  }
});

// Handles POST routes
app.post('/api/notes', (req, res) => {
  const body = {
    content: req.body.content
  };
  if (!req.body.content) {
    const contentError = {
      error: 'content is a required field'
    };
    res.status(400).json(contentError);
  } else {
    req.body.id = data.nextId;
    data.notes[req.body.id] = req.body;

    data.nextId++;
    const newInput = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newInput, 'utf8', err => {
      if (err) {
        const unexpectedError = {
          error: 'An unexpected error occured.'
        };
        res.status(500).json(unexpectedError);
        console.error(err);
      } else {
        res.send(req.body);
      }
    });
  }
});

// Handles DELETE requests
app.delete('/api/notes/:id', (req, res) => {
  if (!(req.params.id > 0)) {
    res.status(400).json(error);
  } else {
    if (data.notes[req.params.id] === undefined) {
      const missingError = {
        error: 'cannot find note with id ' + req.params.id
      };
      res.status(404).json(missingError);
    } else {
      delete data.notes[req.params.id];
      const newInput = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', newInput, 'utf8', err => {
        if (err) {
          const unexpectedError = {
            error: 'An unexpected error occured.'
          };
          res.status(500).json(unexpectedError);
          console.error(err);
        } else {
          res.status(204).json();
        }
      });
    }
  }
});

// Handles PUT request
app.put('/api/notes/:id', (req, res) => {
  const body = {
    content: req.body.content
  };
  if (!(req.params.id > 0)) {
    res.status(400).json(error);
  } else if (!req.body.content) {
    const contentError = {
      error: 'content is a required field'
    };
    res.status(400).json(contentError);
  } else if (data.notes[req.params.id] === undefined) {
    const missingError = {
      error: 'cannot find note with id ' + req.params.id
    };
    res.status(404).json(missingError);
  } else {
    req.body.id = parseInt(req.params.id);
    data.notes[req.params.id] = req.body;
    const newInput = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newInput, 'utf8', err => {
      if (err) {
        const unexpectedError = {
          error: 'An unexpected error occured.'
        };
        res.status(500).json(unexpectedError);
        console.error(err);
      } else {
        res.status(200).json(req.body);
      }
    });
  }
});
// Lets user know server is listening
app.listen(3000, () => {
  console.log('Listening very intently!');
});

// Handles unexpected routes and errors
app.use((req, res) => {
  const unexpectedError = {
    error: 'An unexpected error occured.'
  };
  res.status(500).json(unexpectedError);

});
