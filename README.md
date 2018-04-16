
This is a proposed solution to the [technical challenge for Grove Collaboration](https://github.com/groveco/grove-scheduler-challenge),  built off of a [personally customized version](https://github.com/taygrave/starter_template) of [React Slingshot](https://github.com/coryhouse/react-slingshot), which is a comprehensive starter kit for rapid application development using React/Redux.

## Requirements
1. Call an endpoint to get event data.
2. Display the events and indicate those that are upcoming in the next 24 hours and those that have recently occurred in the last 3 hours.
3. Display a notification when there are upcoming events.

## Running Locally
- **Clone the project**: `git clone git@github.com:taygrave/gc_challenge.git`
- **Install packages**: `npm i`
- **Run the example app**: `npm start`
- **Go!** Click the 'Get My Events' button and take a look! Don't miss that notification!
- **Test**: `npm test` There are 8 tests, I expect 7 or 8 to pass depending on when they are run:
  - The test for `...actions/events` may fail due to cron parsing as the mock event data is currently hardcoded, I left [a comment with a future 'TODO'](https://github.com/taygrave/gc_challenge/blob/master/test/actions/events.spec.js#L83) as to how this should be fixed should this project move forward.
  - PS. I expect a console warning about a deprecation for `moment.js`
