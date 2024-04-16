import React from 'react'





const reviewsData = [
    {
      name: 'John Doe',
      rating: 2,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        name: 'John Doe',
        rating: 5,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Jane Smith',
        rating: 4,
        comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        name: 'John Doe',
        rating: 5,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Jane Smith',
        rating: 4,
        comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    // Add more review objects as needed
  ];

 const Review = () => {
  return (
    <div className="container mx-auto my-10">
    <h2 className="text-3xl pt-5 font-bold mb-6">Customer Reviews</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviewsData.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  </div>
);
};

const ReviewCard = ({ name, rating, comment }) => {
return (
  <div className="bg-blue-100 p-6 rounded-md shadow-md">
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-4">
        {rating}
      </div>
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="flex text-yellow-500">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-5 h-5 fill-current ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c-.3 0-.5.1-.7.3L9 5 3.2 6.3c-.3.1-.6.4-.8.7s-.3.6-.2.9L4 12l-2.5 4.1c-.2.3-.2.6 0 .9s.4.5.7.7L9 19l1.6 4.8c.1.3.4.6.7.7s.6.2.9 0L12 21l4.8 1.6c.3.1.6.1.9 0s.5-.4.7-.7L21 19l4.1-2.5c.3-.2.6-.4.7-.7s.1-.6 0-.9L21 12l2.5-4.1c.1-.3.1-.6 0-.9s-.4-.5-.7-.7L15 5l-1.6-4.8c-.2-.3-.5-.5-.8-.7s-.6-.2-.9 0L12 2zm0 5.2L13.5 10l.5 1.8h1.8l-1.5 1.2.6 1.8-1.5-1.2-1.5 1.2.6-1.8-1.5-1.2h1.8L10.5 10l1.5-1.2z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600">{comment}</p>
  </div>










    
  )
}


export default Review