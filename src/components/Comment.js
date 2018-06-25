import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, editComment, removeComment}) => 
	<li>
		{text} <span>votes: {votes}</span>
		<button onClick={() => thumbUpComment(id)}>Thumb up</button>
		<button onClick={() => thumbDownComment(id)}>Thumb down</button>
		<button onClick={() => editComment(id, prompt(text))}>Edit</button>
		<button onClick={() => removeComment(id)}>X</button>
	</li>;

export default Comment;