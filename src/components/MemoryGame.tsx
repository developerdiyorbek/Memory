import { useState } from "react";
import { shuffleArray } from "../utils";

interface Card {
  id: number;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface Props {
  images: string[];
}

function MemoryGame({ images }: Props) {
  const [cards, setCards] = useState<Card[]>(() => {
    const duplicatedImages = [...images, ...images];
    const shuffledImages = shuffleArray(duplicatedImages);

    return shuffledImages.map((imageUrl, index) => ({
      id: index,
      imageUrl,
      isFlipped: false,
      isMatched: false,
    }));
  });

  function handleCardMatch(firstCard: Card, secondCard: Card) {
    const isMatch = firstCard.imageUrl === secondCard.imageUrl;

    setTimeout(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        if (isMatch) {
          newCards[firstCard.id].isMatched = true;
          newCards[secondCard.id].isMatched = true;
        } else {
          newCards[firstCard.id].isFlipped = false;
          newCards[secondCard.id].isFlipped = false;
        }
        return newCards;
      });
    }, 800);
  }

  function handleCardClick(card: Card) {
    if (card.isFlipped || card.isMatched) return;

    setCards((prevCards) => {
      const newCards = [...prevCards];
      newCards[card.id].isFlipped = true;

      const flippedCards = newCards.filter((c) => c.isFlipped && !c.isMatched);

      if (flippedCards.length === 2) {
        handleCardMatch(flippedCards[0], flippedCards[1]);
      }

      return newCards;
    });
  }

  return (
    <div className="flex flex-wrap gap-4 items-center">
      {cards.map((card) => (
        <div
          className={`size-32 cursor-pointer rounded-lg border-2 border-gray-700 transition-all duration-300 ${
            card.isFlipped || card.isMatched
              ? "rotate-0"
              : "rotate-180 bg-yellow-400"
          }`}
          onClick={() => handleCardClick(card)}
          key={card.id}
        >
          {(card.isFlipped || card.isMatched) && (
            <img
              className="object-cover rounded-lg w-full h-full"
              src={card.imageUrl}
              alt={`card ${card.id}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default MemoryGame;
