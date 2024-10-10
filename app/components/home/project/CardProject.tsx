import React from 'react'

const CardProject = () => {
  const tag = ["Web Design", "Web Development", "Branding"]
  return (
    <div className="aspect-video rounded-3xl relative group overflow-hidden">
      <div className="bg-background z-10 w-fit p-3 -top-32 group-hover:top-0 -right-0 rounded-bl-3xl rounded-tr-3xl absolute duration-300">
        <div className="flex flex-wrap gap-2">
          {tag.map((tag, index) => (
            <div
              key={index}
              className="inline-flex items-center px-3 py-2 rounded-full text-xs font-medium bg-primary text-background"
            >
              {tag}
            </div>
          ))}
        </div>
        <svg
          id="Layer_1"
          className="w-9 h-9 text-background z-30 fill-current absolute -top-[1px] -left-[35.5px] rotate-90"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 100 100"
        >
          <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
        </svg>
        <svg
          id="Layer_1"
          className="w-9 h-9 text-background z-30 fill-current absolute -bottom-[35px] -right-[1px] rotate-90"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 100 100"
        >
          <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
        </svg>
      </div>
      <img
        src="https://images.unsplash.com/photo-1721332149371-fa99da451baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-full scale-110 object-cover group-hover:-translate-y-2 transition-transform duration-300"
      />
    </div>
  );
}

export default CardProject