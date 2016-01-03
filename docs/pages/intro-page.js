import React from 'react';
import Code from '../components/code-component';
import marked from 'marked';

const Markdown = ({ content }) => <div
  className="rsf-layout-content"
  dangerouslySetInnerHTML={{
    __html: marked(content)
  }} />;


const js = (code) => `<pre><code class="hljs javascript">${hljs.highlight('javascript', code[0]).value}</code></pre>`;

const content =
`
# redux simple form

A simple, flexible, and powerful way to create complex forms
with React and Redux.

**Getting Started**

${js`
import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-simple-form';

class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <Field model="user.username">
          <label>Username</label>
          <input type="text" />
        </Field>

        <Field model="user.password">
          <label>Password</label>
          <input type="password" />
        </Field>

        <button>
          Log in as { user.username }
        </button>
      </form>
    );
  }
}

export default connect(s => ({ user: s.user }))(LoginForm);
`}

Any questions?
`;


const IntroPage = () => (
  <Markdown content={content} />
);

export default IntroPage;