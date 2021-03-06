import React from "react";
import { Route, Switch } from "react-router-dom";
import PostsPage from "./Posts/PostsPage";
import PostPage from "./Posts/PostPage";
import Header from "./Common/Header";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/blog" component={PostsPage} />
        <Route exact path="/blog/posts" component={PostsPage} />
        <Route exact path="/blog/post/:link" component={PostPage} />
        {/* <Route path="/blog/about" component={AboutPage} /> */}
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
