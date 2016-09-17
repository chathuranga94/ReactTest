http://egorsmirnov.me/2015/05/22/react-and-es6-part1.html
https://daveceddia.com/react-es5-createclass-vs-es6-classes/

https://babeljs.io/blog/2015/06/07/react-on-es6-plus
    // The ES5 way
    var Photo = React.createClass({
      handleDoubleTap: function(e) { … },
      render: function() { … },
    });
    // The ES6+ way
    class Photo extends React.Component {
      handleDoubleTap(e) { … }
      render() { … }
    }


// npm install --save react react-dom
// npm install --save-dev gulp browserify babelify vinyl-source-stream babel-preset-es2015 babel-preset-react
// gulp
// open index.html
