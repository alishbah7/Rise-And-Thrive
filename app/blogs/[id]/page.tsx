"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface BlogPost {
  id: number;
  postTitle: string;
  postSubTitle: string;
  postDate: string;
  postImage: string;
  postContent: string;
}

interface Comment {
  id: number;
  text: string;
  date: string;
}

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState("");

  //--==== FETCHING POST CONTENT FUNCTIONALITY ====--//
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts`);
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data: BlogPost[] = await response.json();
        const blogPost = data.find((post) => post.id === Number(id));
        if (!blogPost) {
          setError(true);
        } else {
          setPost(blogPost);
        }
      } catch {
        setError(true);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  //--==== ADD COMMENT ====--//
  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const comment: Comment = {
      id: comments.length + 1,
      text: newComment,
      date: new Date().toLocaleString(),
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  //--==== DELETE COMMENT ====--//
  const handleDeleteComment = (commentId: number) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  //--==== START EDITING COMMENT ====--//
  const handleEditComment = (commentId: number, currentText: string) => {
    setEditingCommentId(commentId);
    setEditedText(currentText);
  };

  //--==== SAVE EDITED COMMENT ====--//
  const handleSaveEdit = (commentId: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId ? { ...comment, text: editedText } : comment
      )
    );
    setEditingCommentId(null);
    setEditedText("");
  };

  //--==== CANCEL EDIT COMMENT ====--//
  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setEditedText("");
  };

  //--==== ERROR IF POST DOES NOT EXIST ====--//
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-black text-2xl font-semibold">Post Not Found!</h1>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-10 postsBg">
      {post ? (
        <article className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {/*--==== POST TITLE ====--*/}
          <h1 className="text-3xl md:text-4xl font-bold text-[#8f6922] mb-2">
            {post.postTitle}
          </h1>

          {/*--==== POST SUB TITLE ====--*/}
          <h2 className="text-xl text-gray-500 font-medium mb-4">
            {post.postSubTitle}
          </h2>

          {/*--==== POST DATE ====--*/}
          <p className="text-sm text-gray-400 mb-6">{post.postDate}</p>

          {/*--==== POST IMAGE ====--*/}
          <div className="w-full h-72 relative mb-6">
            <Image
              src={post.postImage}
              alt={post.postTitle}
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/*--==== POST CONTENT ====--*/}
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.postContent}
          </p>

          {/*--===== COMMENT SECTION ====--*/}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h3>
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  {editingCommentId === comment.id ? (
                    <div>
                      <textarea
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        className="w-full p-2 border rounded-md focus:outline-none"
                      />
                      <div className="flex gap-4 mt-2">
                        <button onClick={() => handleSaveEdit(comment.id)} className="px-4 py-2 bg-[#8f6922] text-white rounded-md">Save</button>
                        <button onClick={handleCancelEdit} className="px-4 py-2 bg-gray-400 text-white rounded-md">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-700">{comment.text}</p>
                      <div className="flex flex-col sm:flex-row justify-between">
                        <p className="text-sm text-gray-500 mt-2">{comment.date}</p>
                        <div className="flex gap-[8px] mt-2 text-gray-500">
                          <i className="bx bx-trash cursor-pointer" onClick={() => handleDeleteComment(comment.id)}></i>
                          <i className="bx bx-edit cursor-pointer" onClick={() => handleEditComment(comment.id, comment.text)}></i>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {comments.length === 0 && (
                <p className="text-gray-500">
                  No comments yet. Be the first to comment!
                </p>
              )}
            </div>
            <div className="mt-6">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8f6922] mb-4"
              />
              <button onClick={handleAddComment} className="px-6 py-2 bg-[#8f6922] text-white rounded-lg hover:bg-[#704e16] transition">Add Comment</button>
            </div>
          </div>

        </article>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-gray-500 text-xl font-semibold">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
