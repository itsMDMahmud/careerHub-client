import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-div">
      <h2>when should we use Context-API?</h2>
      <p>
        The React Context API uses a Provider and Consumer pattern to share data
        throughout an application. The provider role is played by a React
        componentthat makes data available to its descendant components. When
        one of those descendants accesses the shared data, it becomes a
        consumer. To use the React Context API, we start by creating a React
        context object, a named object created by the React.createContext()
        function.
      </p>
      <br />
      <h2>what is custom hook?</h2>
      <p>
        In React, a custom hook is a reusable function that encapsulates and
        abstracts away some logic or behavior that can be shared across multiple
        components. Custom hooks allow developers to extract complex logic from
        components and reuse it throughout their application. A React custom
        hook is a function whose name starts with the word use, which is a
        convention used by React to differentiate hooks from regular functions.
        Custom hooks can use other hooks, such as useState or useEffect, to
        manage state and perform side effects. Custom hooks can be used to solve
        various problems, such as fetching data from APIs, managing forms, or
        handling authentication. By encapsulating logic in a custom hook,
        developers can easily reuse it in different components and decouple
        their code, making it more maintainable and easier to test. To use a
        custom hook, you simply call it like any other function in your
        component.
      </p>
      <br />
      <h2>what is useRef in react? and when we use it?</h2>
      <p>
        useRef is a hook in React that allows you to create a mutable reference
        to a DOM element or a value, which persists across component renders.
        You can use useRef to access and manipulate a DOM element directly,
        without having to rely on the React state. For example, you might want
        to focus an input field or scroll to a specific part of the page, and
        useRef can help you achieve that. useRef hook is used to create a
        reference to the input element. The inputRef.current property can then
        be used to access the input element directly and call its focus()
        method. When the button is clicked, the handleClick function is called,
        which sets the focus on the input element using the inputRef. useRef can
        also be used to store a value that persists across renders. In this
        case, you can modify the value using the current property of the
        reference.
      </p>
      <br />
      <h2>what is useMemo in react? and when we use it?</h2>
      <p>
        useMemo is a hook in React that allows you to memoize the result of a
        function so that it is only recomputed when its dependencies change.
        This can help improve the performance of your application by reducing
        unnecessary computations. The useMemo hook takes two arguments: a
        function that returns a value, and an array of dependencies. The
        function will only be re-evaluated when one of the dependencies changes.
        If none of the dependencies have changed, the cached result will be
        returned instead. the useMemo hook is used to compute the factorial of
        n. The function that calculates the factorial is only executed when n
        changes. If n hasn't changed since the last render, the cached result is
        returned instead. useMemo is particularly useful when you have expensive
        computations that are performed frequently, or when you need to avoid
        unnecessary re-renders caused by props that haven't actually changed.
      </p>
    </div>
  );
};

export default Blog;
