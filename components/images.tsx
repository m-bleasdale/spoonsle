import { useState } from "react";

interface props {
    images: string[];
    count: number;
    order: number[];
}

export default function Images({ images, count, order }: props) {
  const [current, setCurrent] = useState(0);

  const imagesToShow = order.slice(0, count).map((i) => images[i]);

  const next = () => setCurrent((prev) => (prev + 1) % imagesToShow.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + imagesToShow.length) % imagesToShow.length);

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-150 h-100 border-2 rounded-md overflow-hidden">
        <img
          src={imagesToShow[current]}
          alt="Image to guess"
          className="object-cover h-full w-full rounded-md"
        />
      </div>

      {imagesToShow.length > 1 && (
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={next}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      )}

      {imagesToShow.length > 1 && (
        <p>
          {current + 1} / {imagesToShow.length}
        </p>
      )}
    </div>
  );
}
