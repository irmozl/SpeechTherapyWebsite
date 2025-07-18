'use client';

import { useActionState, startTransition } from 'react';
import { editPost } from '../../actions/postController';
import { useState } from 'react';

export default function EditPost({ post }) {
	
const [formState, formAction] = useActionState(editPost, {});
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	formData.append('id', post.id); 
	startTransition(() => {
	  formAction(formData);
	});
  };

  return (
	<>
	  {/* Modal Açma Butonu */}
	  <button onClick={() => setShowModal(true)} className="px-2 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700">
		Edit Post
	  </button>

	  {/* Modal */}
	  {showModal && (
		<div
		  className="fixed inset-0 z-50 flex justify-center items-center "
		  style={{ background: 'rgba(0, 0, 0, 0.7)' }} // Black and transparent
		>
		  <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-3">
			<h2 className="text-xl font-semibold mb-4">Edit Post</h2>

			<form onSubmit={handleSubmit}>
			  <div className="mb-3">
				<input
				  name="title"
				  autoComplete="off"
				  type="text"
				  placeholder="Başlık"
				  className="border border-gray-300 rounded p-1 w-full"
				  defaultValue={post?.title.toString()}
				/>
				{formState.errors?.title && (
				  <div role="alert" className="alert alert-warning mt-1">
					<span>{formState.errors?.title}</span>
				  </div>
				)}
			  </div>

			  <div className="mb-3">
				<textarea
				  name="content"
				  autoComplete="off"
				  placeholder="İçerik"
				  className="border border-gray-300 rounded p-1 w-full min-h-45"
				  defaultValue={post?.content.toString()}
				/>
				{formState.errors?.content && (
				  <div role="alert" className="alert alert-warning mt-1">
					<span>{formState.errors?.content}</span>
				  </div>
				)}
			  </div>

			  <div className="flex justify-end space-x-2">
				<button
				  type="button"
				  onClick={() => setShowModal(false)}
				  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
				>
				  Cancel
				</button>
				<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
				  Submit
				</button>
			  </div>
			</form>
		  </div>
		</div>
	  )}
	</>
  );
}