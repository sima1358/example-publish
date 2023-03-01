# Example context use case
In this example we are looking at the use of a context and a `ContextProviderComponent` all in one context. 

The use case is here that we would like to sign in a user into our application. We want to keep track whether the user has signed in or not. 

## Structure Application

Notice our `src` folder is subdivided in different folders: 
- `components `

    This is where we store our components, which we will be using in different views. In our case we have the `Header` component, the `PrivateNavigation` and  the `PublicNavigation` component.
- `context`

    Here we will be storing our different contexts. In this specific case you van find the `AuthContext` here.

- `views` 
    
    This folder contains our 'page' components. This folder has all the components which are mapped to a route. 
    e.g. `Home.jsx` is mapped to `/`, `Login.jsx` is mapped to `/login`, `Logout.jsx `is mapped to `/logout` etc.


## Usage of context in this example

In this example we built an `AuthContext` which will hold the following state : 

- username 
- isAuthenticated.

 When you open `AuthContext.js` you will see it consists of two different sections which are both exported. 

 First the Context itself, using the `createContext` function we create the context and store it inside the `const AuthContext` which we immediately export. See code below: 
 
 ````javascript
 //Context itself export it to the reest of the application
export const AuthContext = createContext();
 ````

 Secondly the AuthContextProviderComponent which is the react component that will act as our Provider. 

  ````javascript
//props.children : children allow us to get access to all children of the component
//provider component: a component which combines provider with the state.
//below is a react component 
export default function AuthContextProviderComponent({children}){

    const [username, setUsername] = useState("Mark");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //this function will handle the full login/logout
    //handleLogin(true, "Mark")  1st case user signs in (in this case Mark)
    //handleLogin(false)   2nd case user signs out. 
    const handleLogin =(isAuthenticated, username = "") => {
        if(isAuthenticated){
            setIsAuthenticated(true);
            setUsername(username);
        } else {
            setIsAuthenticated(false);
            setUsername("");
        }
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}
 ````

 In the above sample we are setting the provider value to `{isAuthenticated, handleLogin}`. All children of our ProviderComponent will have access to these values.

 We then can use the provider in our `App.js` as follows:
  ````javascript
 function App() {
  return (
    <div className="App">
     <AuthContextProviderComponent>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<p>I don't know this page. There was a 404 error</p>} />
      </Routes>
      </AuthContextProviderComponent>
    </div>
  );
}
  ````

Notice in the above code sample that all react elements are placed as children of AuthContextProviderComponent. All children of AuthContextProviderComponent have access to its context. 


## Accessing our context inside the Header component
Inside `components/Header/Header.jsx` we are using the context to determine whether the user is authenticated or not. 

We are first importing the useContext and the AuthContext 
  ````javascript
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
  ````

Next we are using the `useContext` hook to use the context inside the component. See code example below:
  ````javascript
  const {isAuthenticated} = useContext(AuthContext);
  ````

  In the above code example you can see we destructure from our context value`{isAuthenticated, handleLogin}` the `isAuthenticated` state. 

  Now we can use this `isAuthenticated` state to conditionally render either the `PrivateNavigation` component or the `PublicNavigation` component: 

  ```` javascript
  {isAuthenticated ? <PrivateNavigation /> : <PublicNavigation />}
  ````