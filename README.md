# The Monthly Money Maximizer


![](https://media.giphy.com/media/inNKzpF9EMIh2cmee6/giphy.gif)

## Intro
This is application keeps track of all of your monthly expenses in your checking account.  Using the "categories" label on the left, the user is able to see the outgoing deposits to their savings and investing accounts.  The user is able to add new entries, as well as edit and delete existing entries.


## User Journey
Once the user opens the app, they are presented with their existing financial events (be it checking, savings, or investing).  The user may click on the trash can 🗑️ to delete the event.  The user may then click on the pencil ✏️ to edit an event.  They have full control of the event; they can edit the category, event name, and cost.  If the user wants to add a new entry, they click the "Add New +" link at the top of the page.  Each new entry will be rendered to the top of the event container.  

## Supporting Tech
This application uses a Ruby backend, supported with an SQLite3 datebase, ActiveRecord for database modeling & persistence, and Sinatra as the server between the frontend and backend.  The frontend is supported with a React.js framework, using react-router, and functional components.



## Installation
#### Backend
Start in the root folder of your choice:
Clone the git repository, change directory into the backend repo, install Ruby dependencies, start server.

```sh
git clone git@github.com:jcabot01/phase-3-sinatra-react-project.git
cd phase-3-sinatra-react-project
bundle install
bundle exec rake server
```


#### Frontend
Start in the root folder of your choice:  (you can combine the 2 repos into one folder and open them in VS-Code at once)
Clone the git repository, change directory into frontend repo, install package.json dependencies, start server.
```sh
git clone git@github.com:jcabot01/phase3-frontend.git
cd phase3-frontend
npm install
npm start
```
## Tech Dependencies
If you perform the "npm install" and "bundle install" tasks you will download the correct supporting dependicies.  Listed below are the versions found in the files for your quick reference:

The frontend dependicies:
- **"react": "^17.0.0"**,
- **"react-dom": "^17.0.0"**,
- **"react-router-dom": "^6.3.0"**,

The backend dependencies:
- **"sinatra", "~> 2.1"**,
- **"activerecord", "~> 6.1"**,
- **sinatra-activerecord", "~> 2.0**,
- **sqlite3", "~> 1.4**,


Thank you for reading!


## License

MIT