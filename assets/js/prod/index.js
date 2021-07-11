'use strict';

var GreetingText = function GreetingText(props) {
    return React.createElement(
        'p',
        { className: 'greetingText' },
        'Hey! I\'m ',
        props.value
    );
};

ReactDOM.render(React.createElement(GreetingText, { value: 'Krishna Pandey' }), document.getElementById('greeting_text'));