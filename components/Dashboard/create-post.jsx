'use client';

import { useActionState, startTransition } from 'react';
import { createPost } from '../../actions/postController';
import { useState } from 'react';

export default function CreatePost({ userId }) {
  const [formState, formAction] = useActionState(createPost, {});
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('authorId', userId); // Giriş yapan kullanıcıyı ekliyoruz
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <>
      {/* Modal Açma Butonu */}
      <button onClick={() => setShowModal(true)} className="p-2 sm:px-5 bg-gray-800 text-white rounded-md hover:bg-gray-700">
        Create Post
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center"
          style={{ background: 'rgba(0, 0, 0, 0.7)' }} // Black and transparent
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Create New Post</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  name="title"
                  autoComplete="off"
                  type="text"
                  placeholder="Başlık"
                  className="border border-gray-300 rounded p-1 w-full"
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