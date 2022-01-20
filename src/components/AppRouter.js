import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

function AppRouter({ refreshUser, isLoggedIn, userObj }) {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Switch>
        <>
          {isLoggedIn ? (
            <div
              style={{
                maxWidth: 890,
                width: "100%",
                margin: "0 auto",
                marginTop: 80,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Route exact path="/">
                <Home userObj={userObj} />
              </Route>
              <Route exact path="/profile">
                <Profile userObj={userObj} refreshUser={refreshUser} />
              </Route>
            </div>
          ) : (
            <>
              <Route exact path="/">
                <Auth />
              </Route>
            </>
          )}
        </>
      </Switch>
    </Router>
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
