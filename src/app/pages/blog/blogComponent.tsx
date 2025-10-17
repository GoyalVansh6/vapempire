import React from "react";

interface BlogComponentProps {
  image?: string;
  date: string;
  title: string;
  description: string;
  readMoreLink?: string;
}

export default function BlogComponent({
  image,
  date,
  title,
  description,
  readMoreLink,
} : BlogComponentProps){
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      {image ? (
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      ) : (
        <div className="h-48 w-full bg-neutral-200" />
      )}

      <div className="p-6">
        <p className="text-sm text-neutral-500 mb-2">{date}</p>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-neutral-600 mb-4">{description}</p>

        {readMoreLink && (
          <a
            href={readMoreLink}
            className="inline-block px-4 py-2 bg-neutral-800 text-white rounded hover:bg-neutral-700 transition"
          >
            Read More
          </a>
        )}
      </div>
    </div>
  );
};