import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

function AppRouter({ isLoggedIn, userObj }) {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            {/* <Redirect from="*" to="/"/> */}
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
    // <Router>
    //   <Routes>{isLoggedIn ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Auth />} />}</Routes>
    // </Router>
  );
}

export default AppRouter;

// import React, { useState } from "react";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import Auth from "../routes/Auth";
// import Home from "../routes/Home";

// const AppRouter = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <Router>
//       <Switch>
//         {isLoggedIn ? (
//           <>
//             <Route exact path="/">
//               <Home />
//             </Route>
//           </>
//         ) : (
//           <Route exact path="/">
//             <Auth />
//           </Route>
//         )}
//       </Switch>
//     </Router>
//   );
// };

// export default
