## Login Page with Streamlit and React

### Running the dev server

#### Step 1: Start React server

Open a terminal in the root directory. Then run the following commands

1. `cd frontend`

2. `npm install` - To be run only for the first time to install dependencies

3. `npm start`

The react app should start running at http://localhost:3000

#### Step 2: Start streamlit server

Open a terminal in the root directory. Then run the following commands

1. `pip install -r requirements.txt` - To be run only for the first time, preferably in a Python virtual env to install dependencies

2. `streamlit run main.py`

This would open the web app in your default browser showing the login component.

### Running the production server

1. Set the environment variable "ENV" to "production"

2. Build the react web app by running the following commands in the `frontend` directory

`npm run build`

3. Run the streamlit server by running `streamlit run main.py` in the root directory


## Screenshots

![Alt text](screenshot-1.png)

---

![Alt text](screenshot-2.png)

