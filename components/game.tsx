'use client';

import { Pub } from "@/types/pub";
import { GameInput } from "./game-input";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Game ({data, selectedIndex, imageOrder} : {data : Pub[], selectedIndex : number, imageOrder: number[]}) {
    const [mistakes, setMistakes] = useState<string[]>([]);
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState (false);
    const [pubs, setPubs] = useState<Pub[]>(data);

    const images = data[selectedIndex].images;

    const [currentImage, setCurrentImage] = useState(0);
    const [numberOfImages, setNumberOfImages] = useState(1);
    const next = () =>
        setCurrentImage((prev) => (prev < numberOfImages - 1 ? prev + 1 : prev));
    const prev = () =>
        setCurrentImage((prev) => (prev > 0 ? prev - 1 : prev));

    function handleSubmit (guess: string) {
        if (guess !== `${data[selectedIndex].name}, ${data[selectedIndex].area}, ${data[selectedIndex].city}`){
            setMistakes(prev => [...prev, guess]);
            const items = guess.split(",").map(s => s.trim());

            setPubs(pubs.filter(pub =>
                !(pub.name === items[0] && pub.area === items[1] && pub.city === items[2])
            ));

            if(mistakes.length + 1 === 5) setGameOver(true);
            else {
                setCurrentImage(currentImage + 1);
                setNumberOfImages(numberOfImages + 1);
            }

        }
        else {
            setGameOver(true);
            setWin(true);
        }
    }

    return (
        <div className="w-80 md:w-150 flex flex-col items-center gap-5">
            <div className="flex gap-2 flex-col h-100 w-80 md:w-110 rounded-md">
                <img
                    src={images[imageOrder[currentImage]]}
                    alt="Image to guess"
                    className="object-cover h-80 w-80 md:w-110 border-2 rounded-md"
                />

                {numberOfImages > 1 && (
                    <div className="flex flex-col items-center text-sm gap-2">
                        Image {currentImage + 1} of {numberOfImages}
                        <div className="flex gap-2 justify-center items-center">
                            <Button
                                variant="outline"
                                onClick={prev}
                            >
                                Previous
                            </Button>
                            <Button
                                onClick={next}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                )}

            </div>

            {mistakes.map((mistake, i) => (
                <div 
                    key={i}
                    className="rounded-md flex flex-row w-80 md:w-110 h-15 px-5 bg-red-700 text-white  items-center justify-between text-md"
                >
                    {mistake}
                    <X size={28} strokeWidth={3} color="#ffffff"/>
                </div>
            ))}

            {(gameOver && win) &&
                <div 
                    className="rounded-md flex flex-row w-80 md:w-110 h-15 px-5 bg-green-700 text-white items-center justify-between text-md"
                >
                    {`${data[selectedIndex].name}, ${data[selectedIndex].area}, ${data[selectedIndex].city}`}
                    <Check size={32} strokeWidth={4} color="#ffffff"/>
                </div>
            }

            {(gameOver && !win) &&
                <div 
                    className="border-2 rounded-md flex bg-white flex-row w-80 md:w-110 h-15 px-5 items-center justify-between text-md"
                >
                    <p>It was <span className="font-bold">{`${data[selectedIndex].name}, ${data[selectedIndex].area}, ${data[selectedIndex].city}`}</span></p>
                </div>
            }

            {gameOver && 
                <a href="/">
                    <Button>
                        Play Again
                    </Button>
                </a>
            }

            {!gameOver &&
                <GameInput pubs={pubs} onGuess={handleSubmit}/>
            }

            {!gameOver &&
            
            [...Array(5 - 1 - mistakes.length)].map((_, i) => (
                <div
                    key={i}
                    className="border-2 rounded-md flex flex-row w-80 md:w-110 h-15 bg-white text-white items-center justify-between text-md"
                />
            ))}


        </div>
    )
}